import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i1ibfn4ic.css';
import '../../css/f/f-3maicds.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="i1ibfn4ic"/><path class="f-3maicds"/></g>`,
		"fallback": "glyphs:arrow-u-turn",
	});
}

export default Component;
