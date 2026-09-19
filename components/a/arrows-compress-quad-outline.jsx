import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c1l9e6b6h.css';
import '../../css/l/l5ap3ybnt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c1l9e6b6h"/><path class="l5ap3ybnt"/></g>`,
		"fallback": "glyphs:arrows-compress-quad-outline",
	});
}

export default Component;
