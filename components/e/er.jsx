import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hx2gi_c7f.css';
import '../../css/d/desp4-acp.css';
import '../../css/t/t24mwgb-u.css';
import '../../css/o/otemv2ahe.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hx2gi_c7f"/><path class="desp4-acp"/><path class="t24mwgb-u"/><path class="otemv2ahe"/></g>`,
		"fallback": "cif:er",
	});
}

export default Component;
