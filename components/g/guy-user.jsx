import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggh7wdatt.css';

const viewBox = {"width":328,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggh7wdatt"/>`,
		"fallback": "ps:guy-user",
	});
}

export default Component;
