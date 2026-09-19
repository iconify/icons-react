import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqm7ajblf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqm7ajblf"/>`,
		"fallback": "game-icons:butterfly-flower",
	});
}

export default Component;
