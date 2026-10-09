import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlolk7bbc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlolk7bbc"/>`,
		"fallback": "energy-icons:energy-cooperative-48-bold",
	});
}

export default Component;
