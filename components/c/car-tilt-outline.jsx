import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uolcnlt1k.css';
import '../../css/g/gou96pycw.css';
import '../../css/x/xv28_v7yy.css';
import '../../css/w/wp_uj4b0l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="uolcnlt1k"/><path class="gou96pycw"/><path class="xv28_v7yy"/><path class="wp_uj4b0l"/></g>`,
		"fallback": "glyphs:car-tilt-outline",
	});
}

export default Component;
