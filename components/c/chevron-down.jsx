import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eabxhopre.css';

const viewBox = {"width":1664,"height":1312};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eabxhopre"/>`,
		"fallback": "fa:chevron-down",
	});
}

export default Component;
