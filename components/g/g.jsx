import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/emi0eccik.css';
import '../../css/c/c_jf4kbfk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="emi0eccik"/><path class="c_jf4kbfk"/></g>`,
		"fallback": "glyphs:g",
	});
}

export default Component;
