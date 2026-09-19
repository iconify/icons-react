import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/tkm1l-bce.css';
import '../../css/y/youbn_grx.css';
import '../../css/r/rp_k0sd-q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="tkm1l-bce"/><path class="youbn_grx"/><path class="rp_k0sd-q"/></g>`,
		"fallback": "icon-park-solid:chicken",
	});
}

export default Component;
