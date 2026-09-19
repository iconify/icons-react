import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s120smbfq.css';
import '../../css/j/jmnhf-6jp.css';
import '../../css/t/tua_jlyvu.css';
import '../../css/n/ns_uig9dh.css';
import '../../css/u/ufuflmw1g.css';
import '../../css/k/kwzfc9gkv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s120smbfq"/><path class="jmnhf-6jp"/><path class="tua_jlyvu"/><path class="ns_uig9dh"/><path class="ufuflmw1g"/><path class="kwzfc9gkv"/></g>`,
		"fallback": "glyphs-poly:gifts",
	});
}

export default Component;
