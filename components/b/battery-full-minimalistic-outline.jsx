import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vun0ddrph.css';
import '../../css/s/sv57hgpcx.css';
import '../../css/d/dn10j6v4j.css';
import '../../css/f/f-n3xro7a.css';
import '../../css/p/pxo13_1dv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vun0ddrph"/><path class="sv57hgpcx"/><path class="dn10j6v4j"/><path clip-rule="evenodd" class="f-n3xro7a"/><path class="pxo13_1dv"/></g>`,
		"fallback": "solar:battery-full-minimalistic-outline",
	});
}

export default Component;
