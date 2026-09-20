import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r69d2ebvv.css';
import '../../css/v/vmvmzcbhp.css';
import '../../css/d/ddynxdwtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r69d2ebvv"/><path class="vmvmzcbhp"/><path class="ddynxdwtj"/></g>`,
		"fallback": "solar:archive-up-minimalistic-linear",
	});
}

export default Component;
