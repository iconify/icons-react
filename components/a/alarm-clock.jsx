import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/u/uc806cc_b.css';
import '../../css/r/rp0tc0bpg.css';
import '../../css/f/fmadhnbwi.css';
import '../../css/o/o0qcwtbtl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="uc806cc_b"/><path class="rp0tc0bpg"/><path class="fmadhnbwi"/><path class="o0qcwtbtl"/></g>`,
		"fallback": "icon-park:alarm-clock",
	});
}

export default Component;
