import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w20l3vtqj.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w20l3vtqj"/>`,
		"fallback": "system-uicons:bell",
	});
}

export default Component;
