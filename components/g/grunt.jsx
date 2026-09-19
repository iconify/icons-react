import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysj_5aczo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysj_5aczo"/>`,
		"fallback": "fa7-brands:grunt",
	});
}

export default Component;
