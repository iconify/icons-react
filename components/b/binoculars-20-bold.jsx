import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a969tno5c.css';
import '../../css/j/j4abbg0tt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a969tno5c"/><path class="j4abbg0tt"/>`,
		"fallback": "energy-icons:binoculars-20-bold",
	});
}

export default Component;
