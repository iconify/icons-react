import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cghaj0bfe.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cghaj0bfe"/>`,
		"fallback": "fa7-solid:dice-d20",
	});
}

export default Component;
