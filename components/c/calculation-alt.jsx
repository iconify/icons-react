import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji2bvvmog.css';
import '../../css/c/ctgububiy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji2bvvmog"/><path class="ctgububiy"/>`,
		"fallback": "carbon:calculation-alt",
	});
}

export default Component;
