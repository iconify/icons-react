import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tsieswvel.css';
import '../../css/i/idw-iuuqj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tsieswvel"/><path class="idw-iuuqj"/></g>`,
		"fallback": "glyphs:day",
	});
}

export default Component;
