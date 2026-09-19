import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k9rwwkbxt.css';
import '../../css/d/du27q3r4y.css';
import '../../css/p/p7v5yf7rs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="k9rwwkbxt"/><path class="du27q3r4y"/><path class="p7v5yf7rs"/></g>`,
		"fallback": "hugeicons:insert-row-down",
	});
}

export default Component;
