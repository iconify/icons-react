import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgmikpbhl.css';
import '../../css/q/qui0xubvo.css';
import '../../css/l/l-n86hwmb.css';
import '../../css/v/vgpr6_skd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kgmikpbhl"/><path class="qui0xubvo"/><path class="l-n86hwmb"/><path class="vgpr6_skd"/></g>`,
		"fallback": "andrsrxn:file-medal",
	});
}

export default Component;
