import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c36o58cfe.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c36o58cfe"/>`,
		"fallback": "fa7-solid:cloud-meatball",
	});
}

export default Component;
