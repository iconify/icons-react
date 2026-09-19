import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgj8co51w.css';
import '../../css/o/o_xa80bbg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgj8co51w"/><path class="o_xa80bbg"/>`,
		"fallback": "carbon:checkmark-outline-warning",
	});
}

export default Component;
