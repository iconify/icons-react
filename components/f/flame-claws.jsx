import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lthiv2liq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lthiv2liq"/>`,
		"fallback": "game-icons:flame-claws",
	});
}

export default Component;
