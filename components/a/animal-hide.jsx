import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec_0u4bpt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec_0u4bpt"/>`,
		"fallback": "game-icons:animal-hide",
	});
}

export default Component;
