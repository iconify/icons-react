import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r3pipwfee.css';
import '../../css/k/kg3l0zbck.css';
import '../../css/q/qem3unvew.css';
import '../../css/t/tul_hfbmt.css';
import '../../css/s/sa1tl8bfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r3pipwfee"/><path class="kg3l0zbck"/><path class="qem3unvew"/><path class="tul_hfbmt"/><path class="sa1tl8bfj"/></g>`,
		"fallback": "streamline-ultimate-color:currency-pound-increase",
	});
}

export default Component;
