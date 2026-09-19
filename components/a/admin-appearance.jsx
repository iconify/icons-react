import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qre1wn1gl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qre1wn1gl"/>`,
		"fallback": "dashicons:admin-appearance",
	});
}

export default Component;
