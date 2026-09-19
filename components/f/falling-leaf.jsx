import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka0h_3b8h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka0h_3b8h"/>`,
		"fallback": "game-icons:falling-leaf",
	});
}

export default Component;
