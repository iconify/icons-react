import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvu_v82pz.css';
import '../../css/n/ngrn2vb2g.css';
import '../../css/m/mlbyze8aq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xvu_v82pz"/><circle class="ngrn2vb2g"/><circle class="mlbyze8aq"/></g>`,
		"fallback": "andrsrxn:circle-scan",
	});
}

export default Component;
