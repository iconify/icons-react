import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq_6aabuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq_6aabuw"/>`,
		"fallback": "vadivam:a-large-small",
	});
}

export default Component;
