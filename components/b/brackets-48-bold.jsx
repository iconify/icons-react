import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i700qdb9k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i700qdb9k"/>`,
		"fallback": "energy-icons:brackets-48-bold",
	});
}

export default Component;
