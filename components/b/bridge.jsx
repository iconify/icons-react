import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2j_xu-om.css';
import '../../css/q/qn-v1kbpa.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/juun-ro-h.css';
import '../../css/q/q8ld-pjrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGsAGL1d5y" class="w2j_xu-om"/><path id="SVGH5IDtdNV" class="qn-v1kbpa"/></defs><g class="ft5dv1b6b"><g class="juun-ro-h"><use href="#SVGsAGL1d5y"/><use href="#SVGsAGL1d5y"/></g><g class="juun-ro-h"><use href="#SVGH5IDtdNV"/><use href="#SVGH5IDtdNV"/></g><path class="q8ld-pjrr"/></g>`,
		"fallback": "andrsrxn:bridge",
	});
}

export default Component;
