import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cno0gvqrq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cno0gvqrq"/>`,
		"fallback": "carbon:diamond-solid",
	});
}

export default Component;
