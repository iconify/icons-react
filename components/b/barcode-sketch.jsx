import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yd1gg7_mz.css';
import '../../css/f/fvy99utst.css';
import '../../css/j/jdogqw48n.css';
import '../../css/e/ea96_synm.css';
import '../../css/l/l0xgqsb2h.css';
import '../../css/v/vbgm2-j8a.css';
import '../../css/b/b8enn0b1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k yd1gg7_mz"/><path class="fvy99utst wm-k"/><path class="jdogqw48n wm-k"/><path class="ea96_synm wm-k"/><path class="l0xgqsb2h wm-k"/><path class="vbgm2-j8a wm-k"/><path class="b8enn0b1y"/></g>`,
		"fallback": "withicons:barcode-sketch",
	});
}

export default Component;
