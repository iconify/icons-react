import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ae6uo6b7p.css';
import '../../css/x/xtl2bkbxy.css';
import '../../css/h/h038b5hlx.css';
import '../../css/o/oxw8l6wad.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ae6uo6b7p"/><path class="xtl2bkbxy"/><path clip-rule="evenodd" class="h038b5hlx"/><path class="oxw8l6wad"/></g>`,
		"fallback": "glyphs:fahrenheit-outline",
	});
}

export default Component;
