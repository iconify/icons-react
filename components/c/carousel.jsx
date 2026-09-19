import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/q/q9rrfmswq.css';
import '../../css/k/kx983zbwf.css';
import '../../css/u/uddjpj_nf.css';
import '../../css/h/hyoqxwbcr.css';
import '../../css/p/pkuizzokp.css';
import '../../css/h/hhfblyb9t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="q9rrfmswq"/><path class="kx983zbwf"/><path class="uddjpj_nf"/><path class="hyoqxwbcr"/><path class="pkuizzokp"/><path class="hhfblyb9t"/></g>`,
		"fallback": "icon-park:carousel",
	});
}

export default Component;
