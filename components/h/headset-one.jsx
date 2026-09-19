import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ed22ltb_w.css';
import '../../css/t/ttw6-0qgy.css';
import '../../css/h/hrc58ibmo.css';
import '../../css/u/u8g_sbc5i.css';
import '../../css/d/dwonm-2uf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ed22ltb_w"/><path class="ttw6-0qgy"/><path class="hrc58ibmo"/><path class="u8g_sbc5i"/><path class="dwonm-2uf"/></g>`,
		"fallback": "icon-park:headset-one",
	});
}

export default Component;
