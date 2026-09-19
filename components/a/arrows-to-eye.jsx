import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epxn97bdj.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epxn97bdj"/>`,
		"fallback": "fa6-solid:arrows-to-eye",
	});
}

export default Component;
