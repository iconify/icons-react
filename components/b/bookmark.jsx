import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/igxs4xb9q.css';
import '../../css/y/ysssx5bbu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="igxs4xb9q"/><path class="ysssx5bbu"/></g>`,
		"fallback": "glyphs-poly:bookmark",
	});
}

export default Component;
