import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hat3vrldk.css';
import '../../css/j/jj7ew2vkc.css';
import '../../css/f/fztmdkzpk.css';
import '../../css/z/zbfwylorj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hat3vrldk"/><path class="jj7ew2vkc"/><path class="fztmdkzpk"/><path class="zbfwylorj"/>`,
		"fallback": "energy-icons:hydrogen-tank-20-bold",
	});
}

export default Component;
