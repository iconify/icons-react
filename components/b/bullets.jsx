import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_dx_-bon.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_dx_-bon"/>`,
		"fallback": "game-icons:bullets",
	});
}

export default Component;
