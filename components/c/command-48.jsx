import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u52m7xbur.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u52m7xbur"/>`,
		"fallback": "energy-icons:command-48",
	});
}

export default Component;
