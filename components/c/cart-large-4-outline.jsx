import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zcd39qb3r.css';
import '../../css/b/bv8zrozgd.css';
import '../../css/e/en89jw64i.css';
import '../../css/p/pvdyq3brk.css';
import '../../css/x/x5-t90vnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zcd39qb3r"/><path class="bv8zrozgd"/><path clip-rule="evenodd" class="en89jw64i"/><path clip-rule="evenodd" class="pvdyq3brk"/><path clip-rule="evenodd" class="x5-t90vnk"/></g>`,
		"fallback": "solar:cart-large-4-outline",
	});
}

export default Component;
