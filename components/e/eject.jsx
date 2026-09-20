import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqy5knu7n.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqy5knu7n"/>`,
		"fallback": "picon:eject",
	});
}

export default Component;
