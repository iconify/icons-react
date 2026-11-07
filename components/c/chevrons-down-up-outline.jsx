import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/argozxbrb.css';
import '../../css/g/gtd6d5jyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="argozxbrb"/><path class="gtd6d5jyn"/>`,
		"fallback": "solar:chevrons-down-up-outline",
	});
}

export default Component;
