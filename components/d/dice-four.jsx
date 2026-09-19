import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mikr7mblz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mikr7mblz"/>`,
		"fallback": "fa7-solid:dice-four",
	});
}

export default Component;
