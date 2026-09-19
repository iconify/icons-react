import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flm6eybvp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flm6eybvp"/>`,
		"fallback": "fa7-solid:bag-shopping",
	});
}

export default Component;
