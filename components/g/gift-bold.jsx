import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j25u37b0j.css';
import '../../css/o/ovoj6q4ie.css';
import '../../css/e/ecgtjz5jo.css';
import '../../css/i/itd292bhm.css';
import '../../css/w/wjpv4sdph.css';
import '../../css/m/m1r343cqu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j25u37b0j"/><path class="ovoj6q4ie"/><path clip-rule="evenodd" class="ecgtjz5jo"/><path class="itd292bhm"/><path class="wjpv4sdph"/><path class="m1r343cqu"/></g>`,
		"fallback": "glyphs:gift-bold",
	});
}

export default Component;
