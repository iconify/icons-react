import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz01nob5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz01nob5r"/>`,
		"fallback": "lineicons:audi-alt",
	});
}

export default Component;
