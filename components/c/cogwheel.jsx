import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qdwqk99sh.css';
import '../../css/x/xo8i_z-vf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qdwqk99sh"/><path class="xo8i_z-vf"/></g>`,
		"fallback": "glyphs-poly:cogwheel",
	});
}

export default Component;
