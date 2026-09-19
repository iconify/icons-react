import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d58vsbvrf.css';
import '../../css/v/v7mge4i6o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d58vsbvrf"/><path class="v7mge4i6o"/>`,
		"fallback": "carbon:ibm-watson-knowledge-catalog",
	});
}

export default Component;
