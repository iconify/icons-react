import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1hdpcc9y.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1hdpcc9y"/>`,
		"fallback": "fa6-brands:bots",
	});
}

export default Component;
