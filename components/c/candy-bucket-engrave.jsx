import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mh814j51o.css';
import '../../css/c/cglaq54nl.css';
import '../../css/q/q4xrmcbpa.css';
import '../../css/k/kpoterrtk.css';
import '../../css/v/vftedud3y.css';
import '../../css/e/ew2od8bsa.css';
import '../../css/s/sd9lj-blo.css';
import '../../css/v/vnx_hu_2a.css';
import '../../css/h/hh9cg0bln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mh814j51o wm-a"/><path class="cglaq54nl wm-s"/><circle class="q4xrmcbpa wm-s"/><path class="kpoterrtk wm-s"/><ellipse class="vftedud3y wm-s"/><path class="ew2od8bsa wm-s"/><path class="sd9lj-blo wm-k"/><rect class="vnx_hu_2a wm-k"/><path class="hh9cg0bln wm-shadow"/></g>`,
		"fallback": "withicons:candy-bucket-engrave",
	});
}

export default Component;
