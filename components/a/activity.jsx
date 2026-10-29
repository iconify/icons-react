import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/g_6f24vpf.css';
import '../../css/m/mzn8nrb_f.css';
import '../../css/g/ggre-9uoz.css';
import '../../css/q/qu3y-leru.css';
import '../../css/z/zqmi4db4z.css';
import '../../css/z/zotp8-bki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="g_6f24vpf wm-shadow"/><path class="mzn8nrb_f"/><path class="ggre-9uoz"/><path class="qu3y-leru"/><path class="wm-shine zqmi4db4z"/><path class="wm-deco zotp8-bki"/></g>`,
		"fallback": "withicons-sticker:activity",
	});
}

export default Component;
