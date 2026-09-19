import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgj8co51w.css';
import '../../css/s/slueoubbp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgj8co51w"/><path class="slueoubbp"/>`,
		"fallback": "carbon:checkmark-outline-error",
	});
}

export default Component;
