import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl9ati6se.css';
import '../../css/q/qfi21qbwi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl9ati6se"/><path class="qfi21qbwi"/>`,
		"fallback": "energy-icons:hanger-48-bold",
	});
}

export default Component;
