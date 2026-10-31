import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyy4tpg8x.css';
import '../../css/g/g40ijz7bf.css';
import '../../css/g/gjrpy2b0q.css';
import '../../css/n/nd_n0v11x.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyy4tpg8x"/><path class="g40ijz7bf"/><path class="gjrpy2b0q"/><path class="nd_n0v11x"/>`,
		"fallback": "tabler-flags:algeria",
	});
}

export default Component;
