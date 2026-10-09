import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isno3kbpb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isno3kbpb"/>`,
		"fallback": "energy-icons:bird-48-bold",
	});
}

export default Component;
