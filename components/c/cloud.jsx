import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mya4-7y4i.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mya4-7y4i"/>`,
		"fallback": "fa7-solid:cloud",
	});
}

export default Component;
