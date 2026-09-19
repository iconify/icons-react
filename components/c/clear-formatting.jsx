import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi3p-9b8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi3p-9b8b"/>`,
		"fallback": "gridicons:clear-formatting",
	});
}

export default Component;
