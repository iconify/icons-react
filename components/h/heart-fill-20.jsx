import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx63x44ij.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx63x44ij"/>`,
		"fallback": "garden:heart-fill-20",
	});
}

export default Component;
