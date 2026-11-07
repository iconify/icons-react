import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m92zv-bjj.css';
import '../../css/e/e5hqdwbhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m92zv-bjj"/><path clip-rule="evenodd" class="e5hqdwbhx"/>`,
		"fallback": "solar:bell-ring-bold",
	});
}

export default Component;
