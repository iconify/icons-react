import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zx7uv5q7n.css';
import '../../css/f/f_mfzu3uv.css';
import '../../css/y/yu-13qbwi.css';
import '../../css/g/gablpk-so.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zx7uv5q7n"/><path class="f_mfzu3uv"/><path class="yu-13qbwi"/><path class="gablpk-so"/></g>`,
		"fallback": "glyphs:cogs-1-outline",
	});
}

export default Component;
