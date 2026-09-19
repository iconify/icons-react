import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufn6_c2nl.css';
import '../../css/e/e39ud6bwf.css';
import '../../css/i/ixz9bpndl.css';
import '../../css/q/qp7u-0nuf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufn6_c2nl"/><circle class="e39ud6bwf"/><path class="ixz9bpndl"/><path class="qp7u-0nuf"/>`,
		"fallback": "carbon:improve-relevance",
	});
}

export default Component;
