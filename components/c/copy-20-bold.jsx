import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd5atu08j.css';
import '../../css/v/veyzdwbvj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd5atu08j"/><path class="veyzdwbvj"/>`,
		"fallback": "energy-icons:copy-20-bold",
	});
}

export default Component;
