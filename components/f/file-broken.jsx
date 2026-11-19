import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxmcm_3pm.css';
import '../../css/k/kzapl5byq.css';
import '../../css/c/caqj00b7q.css';
import '../../css/x/xi9arj-ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lxmcm_3pm"/><path class="kzapl5byq"/><path class="caqj00b7q"/><path class="xi9arj-ik"/></g>`,
		"fallback": "andrsrxn:file-broken",
	});
}

export default Component;
