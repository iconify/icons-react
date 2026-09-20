import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/taf23hb_d.css';
import '../../css/w/wze5myx6x.css';
import '../../css/e/e0cmz0boh.css';
import '../../css/z/zr35ecbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="taf23hb_d"/><circle class="wze5myx6x"/><path class="e0cmz0boh"/><path class="zr35ecbmr"/></g>`,
		"fallback": "solar:file-cog-linear",
	});
}

export default Component;
