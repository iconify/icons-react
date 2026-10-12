import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj4-zfdlh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj4-zfdlh"/>`,
		"fallback": "garden:eye-fill-20",
	});
}

export default Component;
