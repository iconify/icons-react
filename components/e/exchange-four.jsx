import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/x/xzba8vb8f.css';
import '../../css/m/mz_ha2bnz.css';
import '../../css/o/o-1_wob-i.css';
import '../../css/t/t19r8acsn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="utf5_xbzs"/><path class="xzba8vb8f"/><path class="mz_ha2bnz"/><path class="o-1_wob-i"/><path class="t19r8acsn"/></g>`,
		"fallback": "icon-park:exchange-four",
	});
}

export default Component;
