import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5kc42b7b.css';
import '../../css/a/a_5y6ozvk.css';
import '../../css/f/fxf6_0bul.css';

const viewBox = {"width":301,"height":301};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t5kc42b7b"/><path class="a_5y6ozvk"/><path class="fxf6_0bul"/></g>`,
		"fallback": "cif:ch",
	});
}

export default Component;
