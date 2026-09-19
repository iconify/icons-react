import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb1ht8aoq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb1ht8aoq"/>`,
		"fallback": "cib:apple-pay",
	});
}

export default Component;
