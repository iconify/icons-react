import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6of_mbqw.css';
import '../../css/j/jsimqabqv.css';
import '../../css/g/gdvanrbvt.css';
import '../../css/q/qbee243ig.css';
import '../../css/b/bkts8k-wx.css';
import '../../css/w/wqgcf9b4p.css';
import '../../css/f/fv-z18bpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6of_mbqw wm-shadow"/><path class="jsimqabqv"/><path class="gdvanrbvt"/><path class="qbee243ig"/><path class="bkts8k-wx"/><path class="wm-shine wqgcf9b4p"/><path class="fv-z18bpn"/>`,
		"fallback": "withicons-plush:drag-handle",
	});
}

export default Component;
