import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oibf0yb_r.css';
import '../../css/c/cgqjoccae.css';
import '../../css/q/qde_v4hpo.css';
import '../../css/f/fhkwawcdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oibf0yb_r"/><path class="cgqjoccae"/><path class="qde_v4hpo"/><path class="fhkwawcdt"/></g>`,
		"fallback": "streamline-cyber-color:bin",
	});
}

export default Component;
