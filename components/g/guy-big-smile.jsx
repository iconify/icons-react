import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-n4jtb6t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-n4jtb6t"/>`,
		"fallback": "ps:guy-big-smile",
	});
}

export default Component;
