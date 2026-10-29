import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jeparrjkn.css';
import '../../css/c/cl_n_acin.css';
import '../../css/j/jvqti2j-h.css';
import '../../css/v/vgovwzbmp.css';
import '../../css/o/oycv71bfr.css';
import '../../css/r/rxp-h_bzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jeparrjkn wm-k"/><path class="cl_n_acin wm-a"/><path class="jvqti2j-h wm-shadow"/><path class="vgovwzbmp wm-k"/><path class="oycv71bfr wm-a"/><path class="rxp-h_bzm wm-k"/></g>`,
		"fallback": "withicons:code-xml-engrave",
	});
}

export default Component;
