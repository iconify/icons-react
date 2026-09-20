import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkh4p1ded.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkh4p1ded"/>`,
		"fallback": "mdi:chevron-left-box-outline",
	});
}

export default Component;
