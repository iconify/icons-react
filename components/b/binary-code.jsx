import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aqbnf8b1b.css';
import '../../css/m/mf46d6irg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="aqbnf8b1b"/><path class="mf46d6irg"/></g>`,
		"fallback": "hugeicons:binary-code",
	});
}

export default Component;
