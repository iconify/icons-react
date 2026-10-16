import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmedpvb3p.css';
import '../../css/j/je85er4yr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmedpvb3p"/><path class="je85er4yr"/>`,
		"fallback": "energy-icons:glue-gun-48-bold",
	});
}

export default Component;
