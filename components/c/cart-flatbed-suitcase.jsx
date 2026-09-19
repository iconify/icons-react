import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1xiq3osc.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1xiq3osc"/>`,
		"fallback": "fa6-solid:cart-flatbed-suitcase",
	});
}

export default Component;
