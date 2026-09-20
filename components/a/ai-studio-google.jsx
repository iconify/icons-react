import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xreo-vkxv.css';
import '../../css/y/yrtrqejse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="xreo-vkxv"/><path class="yrtrqejse"/></g>`,
		"fallback": "thesvg-color:ai-studio-google",
	});
}

export default Component;
