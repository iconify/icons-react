import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vnwbdxqpa.css';
import '../../css/j/jyhbjtbkm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vnwbdxqpa"/><path class="jyhbjtbkm"/></g>`,
		"fallback": "glyphs:cogs-duo",
	});
}

export default Component;
