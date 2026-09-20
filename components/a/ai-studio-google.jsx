import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
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
		"content": `<g class="n1lsf0bnc"><path class="xreo-vkxv"/><path class="yrtrqejse"/></g>`,
		"fallback": "thesvg:ai-studio-google",
	});
}

export default Component;
