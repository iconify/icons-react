import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu-4c3b4v.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu-4c3b4v"/>`,
		"fallback": "fa7-solid:biohazard",
	});
}

export default Component;
