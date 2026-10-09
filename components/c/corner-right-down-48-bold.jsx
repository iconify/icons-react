import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqe6l8ger.css';
import '../../css/v/vzdt97b6q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqe6l8ger"/><path class="vzdt97b6q"/>`,
		"fallback": "energy-icons:corner-right-down-48-bold",
	});
}

export default Component;
