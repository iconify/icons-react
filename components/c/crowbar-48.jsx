import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3hqt2bju.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3hqt2bju"/>`,
		"fallback": "energy-icons:crowbar-48",
	});
}

export default Component;
