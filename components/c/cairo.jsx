import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7oxfibsk.css';

const viewBox = {"width":396,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7oxfibsk"/>`,
		"fallback": "file-icons:cairo",
	});
}

export default Component;
