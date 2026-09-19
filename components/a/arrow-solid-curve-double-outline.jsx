import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4bclhb-u.css';
import '../../css/r/rn4x_kbii.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a4bclhb-u"/><path class="rn4x_kbii"/></g>`,
		"fallback": "glyphs:arrow-solid-curve-double-outline",
	});
}

export default Component;
