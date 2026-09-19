import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgoo4abny.css';
import '../../css/c/cpie37nel.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kgoo4abny"/><path class="cpie37nel"/></g>`,
		"fallback": "glyphs:crop-duo",
	});
}

export default Component;
