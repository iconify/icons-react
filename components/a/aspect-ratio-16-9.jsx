import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aksx-abjk.css';
import '../../css/y/y5ej1tb5h.css';
import '../../css/y/y7akagbwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aksx-abjk"/><path class="y5ej1tb5h"/><path class="y7akagbwf"/></g>`,
		"fallback": "andrsrxn:aspect-ratio-16-9",
	});
}

export default Component;
