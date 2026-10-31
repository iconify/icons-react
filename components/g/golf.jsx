import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/q/qed5mbcge.css';
import '../../css/w/w30futbbi.css';
import '../../css/v/vk0so77jc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGfBifseJO" x1="8.75" x2="14.75" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGfBifseJO)" class="qed5mbcge"/><path class="w30futbbi wm-a"/><path class="vk0so77jc wm-shine"/></g>`,
		"fallback": "withicons-utsav:golf",
	});
}

export default Component;
