import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lwcxpfyzy.css';
import '../../css/i/itjas8y7w.css';
import '../../css/a/apb_2_b5k.css';
import '../../css/p/pk11pab5e.css';
import '../../css/k/kye7fgb5m.css';
import '../../css/o/oxol8u2xx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lwcxpfyzy wm-k"/><path class="itjas8y7w wm-a"/><path class="apb_2_b5k wm-shadow"/><path class="pk11pab5e wm-k"/><path class="kye7fgb5m wm-a"/><path class="oxol8u2xx wm-k"/></g>`,
		"fallback": "withicons:dices-engrave",
	});
}

export default Component;
