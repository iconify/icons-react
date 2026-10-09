import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0m9rc9my.css';
import '../../css/o/o2332zble.css';
import '../../css/k/kg73c9ijz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0m9rc9my"/><path class="o2332zble"/><path class="kg73c9ijz"/>`,
		"fallback": "energy-icons:first-aid-20-bold",
	});
}

export default Component;
