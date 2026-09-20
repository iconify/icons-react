import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cjnwjzb4c.css';
import '../../css/z/zir5_7bld.css';
import '../../css/g/gygffl34c.css';
import '../../css/h/hu5w36xiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cjnwjzb4c"/><path clip-rule="evenodd" class="zir5_7bld"/><path clip-rule="evenodd" class="gygffl34c"/><path clip-rule="evenodd" class="hu5w36xiu"/></g>`,
		"fallback": "solar:headphones-square-sound-bold",
	});
}

export default Component;
