import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou4zimbcr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou4zimbcr"/>`,
		"fallback": "game-icons:bulgaria",
	});
}

export default Component;
