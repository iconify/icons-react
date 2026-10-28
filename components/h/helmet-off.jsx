import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m3hfu5bbh.css';
import '../../css/m/m02umccfs.css';
import '../../css/h/h_njj_bpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m3hfu5bbh"/><path class="m02umccfs"/><path class="h_njj_bpw"/></g>`,
		"fallback": "andrsrxn:helmet-off",
	});
}

export default Component;
