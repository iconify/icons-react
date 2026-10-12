import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/psoam_b8s.css';
import '../../css/q/q-z_h_wne.css';
import '../../css/g/gzumpmblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="psoam_b8s"/><path class="q-z_h_wne"/><path class="gzumpmblw"/></g>`,
		"fallback": "andrsrxn:file-html",
	});
}

export default Component;
