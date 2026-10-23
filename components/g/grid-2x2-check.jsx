import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfbvi1bmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfbvi1bmf"/>`,
		"fallback": "vadivam:grid-2x2-check",
	});
}

export default Component;
