import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l6isbtbxr.css';
import '../../css/a/a47_f0m3e.css';
import '../../css/c/cx_isemhf.css';
import '../../css/d/ddq-3fb3s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="l6isbtbxr"/><path class="a47_f0m3e"/><path class="cx_isemhf"/><path class="ddq-3fb3s"/></g>`,
		"fallback": "glyphs:arrow-solid-circle-outline",
	});
}

export default Component;
