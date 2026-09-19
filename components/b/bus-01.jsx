import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/wz1rvsomz.css';
import '../../css/u/uvef5qbta.css';
import '../../css/k/kbe-t1bmz.css';
import '../../css/k/k4qo1xe9v.css';
import '../../css/y/yrbdzwe0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="wz1rvsomz"/><path class="uvef5qbta"/><path class="kbe-t1bmz"/><path class="k4qo1xe9v"/><path class="yrbdzwe0q"/></g>`,
		"fallback": "hugeicons:bus-01",
	});
}

export default Component;
