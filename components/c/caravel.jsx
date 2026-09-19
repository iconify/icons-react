import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu02b2pci.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu02b2pci"/>`,
		"fallback": "game-icons:caravel",
	});
}

export default Component;
