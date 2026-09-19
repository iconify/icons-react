import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq6t0xbcz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq6t0xbcz"/>`,
		"fallback": "game-icons:cake-slice",
	});
}

export default Component;
