import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u024hotba.css';
import '../../css/x/x4ola4brb.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/i/igllo8tla.css';
import '../../css/d/dlz_o4g1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u024hotba"/><path class="x4ola4brb"/><g class="mc2zb0bvp"><circle class="igllo8tla"/><path class="dlz_o4g1i"/></g></g>`,
		"fallback": "struq:file-search",
	});
}

export default Component;
