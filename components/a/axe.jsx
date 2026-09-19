import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w-hxk767e.css';
import '../../css/u/uw-n9cbom.css';
import '../../css/h/h35g33bej.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w-hxk767e"/><path class="uw-n9cbom"/><path class="h35g33bej"/></g>`,
		"fallback": "glyphs:axe",
	});
}

export default Component;
