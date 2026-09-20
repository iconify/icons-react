import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/g/g6g47fbrd.css';
import '../../css/x/xs7dweury.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path clip-rule="evenodd" class="g6g47fbrd"/><path clip-rule="evenodd" class="xs7dweury"/></g>`,
		"fallback": "skill-icons:alpinejs-dark",
	});
}

export default Component;
