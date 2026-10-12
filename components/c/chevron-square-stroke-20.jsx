import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kun0b6tvp.css';
import '../../css/f/fppjkf2zl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kun0b6tvp"/><path class="fppjkf2zl"/>`,
		"fallback": "garden:chevron-square-stroke-20",
	});
}

export default Component;
