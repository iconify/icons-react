import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6geo1bkk.css';
import '../../css/d/drbv3ibqe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6geo1bkk"/><path class="drbv3ibqe"/>`,
		"fallback": "carbon:chat",
	});
}

export default Component;
