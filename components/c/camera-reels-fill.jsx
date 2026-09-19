import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xn4aaqbkb.css';
import '../../css/e/eyjrvqbsq.css';
import '../../css/z/zs55ho22r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xn4aaqbkb"/><path class="eyjrvqbsq"/><path class="zs55ho22r"/></g>`,
		"fallback": "bi:camera-reels-fill",
	});
}

export default Component;
