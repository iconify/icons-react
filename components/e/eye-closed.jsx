import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b4gzso3dl.css';
import '../../css/z/z3v-smg0b.css';
import '../../css/b/bc_7zo_yk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b4gzso3dl"/><path class="z3v-smg0b"/><path class="bc_7zo_yk"/></g>`,
		"fallback": "hugeicons:eye-closed",
	});
}

export default Component;
