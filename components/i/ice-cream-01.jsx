import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e6zwofhca.css';
import '../../css/r/r4f-rbb3p.css';
import '../../css/b/b7eg75l7y.css';
import '../../css/q/qabuu-bzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e6zwofhca"/><path class="r4f-rbb3p"/><path class="b7eg75l7y"/><path class="qabuu-bzw"/></g>`,
		"fallback": "hugeicons:ice-cream-01",
	});
}

export default Component;
