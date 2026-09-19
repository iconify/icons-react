import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k88_0bb5o.css';
import '../../css/p/pbtwl-bno.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k88_0bb5o"/><path class="pbtwl-bno"/></g>`,
		"fallback": "glyphs:icons-outline",
	});
}

export default Component;
