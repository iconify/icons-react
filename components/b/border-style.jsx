import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icuj-db5b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icuj-db5b"/>`,
		"fallback": "fa7-solid:border-style",
	});
}

export default Component;
