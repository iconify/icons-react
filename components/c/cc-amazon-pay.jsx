import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqhkegbrq.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqhkegbrq"/>`,
		"fallback": "fa-brands:cc-amazon-pay",
	});
}

export default Component;
