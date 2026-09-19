import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/l/le8r1fb7t.css';
import '../../css/z/z8_yi4bim.css';
import '../../css/j/jv95subdn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="le8r1fb7t"/><path class="z8_yi4bim"/><path class="jv95subdn"/></g>`,
		"fallback": "glyphs-poly:bars-offset",
	});
}

export default Component;
