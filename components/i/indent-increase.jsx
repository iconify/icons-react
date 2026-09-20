import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3991bcxj.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3991bcxj"/>`,
		"fallback": "lineicons:indent-increase",
	});
}

export default Component;
