import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyptepbli.css';
import '../../css/t/tmu41y1sj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyptepbli"/><path class="tmu41y1sj"/>`,
		"fallback": "energy-icons:fox-20",
	});
}

export default Component;
