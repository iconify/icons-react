import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mykchfbxc.css';
import '../../css/f/foi40nbza.css';
import '../../css/l/luqu_mfyf.css';
import '../../css/s/s4uk5n7uw.css';
import '../../css/h/hnxobrbrn.css';
import '../../css/o/ohlg0wbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mykchfbxc wm-k"/><path class="foi40nbza wm-s"/><path class="luqu_mfyf wm-shadow"/><path class="s4uk5n7uw wm-k"/><path class="hnxobrbrn wm-a"/><path class="ohlg0wbaj wm-s"/></g>`,
		"fallback": "withicons:champagne-toast-engrave",
	});
}

export default Component;
