import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7g9menyg.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7g9menyg"/>`,
		"fallback": "dinkie-icons:die-face3-small-filled",
	});
}

export default Component;
