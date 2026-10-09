import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wupjjnqjd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wupjjnqjd"/>`,
		"fallback": "energy-icons:align-vertical-48-bold",
	});
}

export default Component;
