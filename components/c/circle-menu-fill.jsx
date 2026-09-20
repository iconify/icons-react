import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bazfj2bff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bazfj2bff"/>`,
		"fallback": "keyline-icons:circle-menu-fill",
	});
}

export default Component;
