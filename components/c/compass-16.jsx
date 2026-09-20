import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brk4pcs8h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="brk4pcs8h"/>`,
		"fallback": "qlementine-icons:compass-16",
	});
}

export default Component;
