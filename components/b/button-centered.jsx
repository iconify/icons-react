import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7knn_bjg.css';
import '../../css/k/ksmczrn_i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7knn_bjg"/><path class="ksmczrn_i"/>`,
		"fallback": "carbon:button-centered",
	});
}

export default Component;
