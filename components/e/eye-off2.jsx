import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r8zd38n0h.css';
import '../../css/g/gl1daib4n.css';
import '../../css/z/zw1qlkb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r8zd38n0h"/><path class="gl1daib4n"/><path class="zw1qlkb7m"/></g>`,
		"fallback": "reicon:eye-off2",
	});
}

export default Component;
