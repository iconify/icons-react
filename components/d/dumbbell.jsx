import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-oky0bmj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-oky0bmj"/>`,
		"fallback": "fa7-solid:dumbbell",
	});
}

export default Component;
