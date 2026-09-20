import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/w/wgngop0ao.css';
import '../../css/k/kmr3f9lbv.css';
import '../../css/f/fyihn7b4x.css';
import '../../css/a/ajn4wobfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="wgngop0ao"/><rect class="kmr3f9lbv"/><path class="fyihn7b4x"/><rect class="ajn4wobfi"/></g>`,
		"fallback": "lets-icons:candlestick",
	});
}

export default Component;
