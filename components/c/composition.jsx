import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ndnjf_k0h.css';
import '../../css/z/zqj3racsh.css';
import '../../css/m/mlmdecz3n.css';
import '../../css/t/t50buibtp.css';
import '../../css/d/dhvqt0w_z.css';
import '../../css/k/kbfv2gbfp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ndnjf_k0h"/><path class="zqj3racsh"/><path class="mlmdecz3n"/><path class="t50buibtp"/><path class="dhvqt0w_z"/><path class="kbfv2gbfp"/></g>`,
		"fallback": "icon-park:composition",
	});
}

export default Component;
