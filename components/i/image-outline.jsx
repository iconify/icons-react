import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f-rc7hbej.css';
import '../../css/m/mal9x4b_u.css';
import '../../css/v/vjupb11qn.css';
import '../../css/a/a30pbeb1v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="f-rc7hbej"/><path class="mal9x4b_u"/><path class="vjupb11qn"/><path class="a30pbeb1v"/></g>`,
		"fallback": "glyphs:image-outline",
	});
}

export default Component;
