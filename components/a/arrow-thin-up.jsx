import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3inu9bfj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3inu9bfj"/>`,
		"fallback": "zondicons:arrow-thin-up",
	});
}

export default Component;
