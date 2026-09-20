import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c0z3n2b-j.css';
import '../../css/v/v6eq_gm_q.css';
import '../../css/g/gbas-2bib.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="c0z3n2b-j"/><path class="v6eq_gm_q"/><path class="gbas-2bib"/></g>`,
		"fallback": "streamline-flex:bug-antivirus-shield",
	});
}

export default Component;
