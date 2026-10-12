import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/o/oeu0ekbnm.css';
import '../../css/y/yihcjjidd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="oeu0ekbnm"/><path class="yihcjjidd"/>`,
		"fallback": "energy-icons:arrow-circle-down-20-bold",
	});
}

export default Component;
