import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk2_g9b7k.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk2_g9b7k"/>`,
		"fallback": "fa6-solid:building-circle-arrow-right",
	});
}

export default Component;
