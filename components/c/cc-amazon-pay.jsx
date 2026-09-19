import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg9anbbqt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg9anbbqt"/>`,
		"fallback": "cib:cc-amazon-pay",
	});
}

export default Component;
