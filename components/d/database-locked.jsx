import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i6bc1bbpn.css';
import '../../css/s/sg--oqwwb.css';
import '../../css/a/afgrcjb4w.css';
import '../../css/k/k0l0khh9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="i6bc1bbpn"/><path class="sg--oqwwb"/><path class="afgrcjb4w"/><path class="k0l0khh9s"/></g>`,
		"fallback": "hugeicons:database-locked",
	});
}

export default Component;
