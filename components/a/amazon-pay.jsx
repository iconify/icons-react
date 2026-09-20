import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxj4jgb0f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxj4jgb0f"/>`,
		"fallback": "la:amazon-pay",
	});
}

export default Component;
