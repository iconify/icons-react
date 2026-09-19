import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hyhnr3bkw.css';
import '../../css/i/ix9gnccxs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hyhnr3bkw"/><path class="ix9gnccxs"/></g>`,
		"fallback": "glyphs:dollar-bill-wave",
	});
}

export default Component;
