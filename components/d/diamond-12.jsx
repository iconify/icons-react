import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we4_k1bzy.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we4_k1bzy"/>`,
		"fallback": "qlementine-icons:diamond-12",
	});
}

export default Component;
