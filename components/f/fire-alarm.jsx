import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/f86sbobhz.css';
import '../../css/w/wdmkhm1ay.css';
import '../../css/p/p3kg65b0q.css';
import '../../css/o/ox-2d1b1w.css';
import '../../css/w/w4_nxlbcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="f86sbobhz"/><path class="wdmkhm1ay"/><path class="p3kg65b0q"/><path class="ox-2d1b1w"/><path class="w4_nxlbcp"/></g>`,
		"fallback": "streamline-cyber:fire-alarm",
	});
}

export default Component;
