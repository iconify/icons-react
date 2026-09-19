import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/efyoqqoyp.css';
import '../../css/h/h_-r9nbyf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="efyoqqoyp"/><path class="h_-r9nbyf"/></g>`,
		"fallback": "glyphs:highlighter",
	});
}

export default Component;
