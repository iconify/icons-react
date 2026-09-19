import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfoxw2uzn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfoxw2uzn"/>`,
		"fallback": "game-icons:first-aid-kit",
	});
}

export default Component;
