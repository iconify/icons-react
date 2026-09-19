import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mytyl3bxc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mytyl3bxc"/>`,
		"fallback": "game-icons:duality-mask",
	});
}

export default Component;
