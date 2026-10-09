import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0bcohnco.css';
import '../../css/y/yvipk86za.css';
import '../../css/v/vekg20bug.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0bcohnco"/><path class="yvipk86za"/><path class="vekg20bug"/>`,
		"fallback": "energy-icons:git-pull-request-48-bold",
	});
}

export default Component;
