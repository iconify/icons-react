import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms4wiabgf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms4wiabgf"/>`,
		"fallback": "game-icons:european-flag",
	});
}

export default Component;
