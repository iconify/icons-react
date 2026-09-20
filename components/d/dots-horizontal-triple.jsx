import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey6w3zw8a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey6w3zw8a"/>`,
		"fallback": "zondicons:dots-horizontal-triple",
	});
}

export default Component;
