import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8qo8-bmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8qo8-bmt"/>`,
		"fallback": "uis:align-right-justify",
	});
}

export default Component;
