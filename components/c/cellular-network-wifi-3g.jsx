import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3v7f-bdm.css';
import '../../css/j/j9310_jej.css';
import '../../css/l/lfcpif5sx.css';
import '../../css/c/ct_zwvx1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j3v7f-bdm"/><path class="j9310_jej"/><path class="lfcpif5sx"/><path class="ct_zwvx1j"/></g>`,
		"fallback": "streamline-ultimate-color:cellular-network-wifi-3g",
	});
}

export default Component;
