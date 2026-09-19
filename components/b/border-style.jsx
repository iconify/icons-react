import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dktx04vrx.css';
import '../../css/u/urj-3gbrf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dktx04vrx"/><path class="urj-3gbrf"/></g>`,
		"fallback": "glyphs:border-style",
	});
}

export default Component;
