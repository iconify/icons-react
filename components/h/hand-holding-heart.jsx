import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n68pnzbbs.css';
import '../../css/u/usc9pbclp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n68pnzbbs"/><path class="usc9pbclp"/></g>`,
		"fallback": "glyphs-poly:hand-holding-heart",
	});
}

export default Component;
