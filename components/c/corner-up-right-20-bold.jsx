import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmma348sl.css';
import '../../css/y/yh9xo0blb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmma348sl"/><path class="yh9xo0blb"/>`,
		"fallback": "energy-icons:corner-up-right-20-bold",
	});
}

export default Component;
