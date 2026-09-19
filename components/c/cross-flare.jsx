import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei3cahb2n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei3cahb2n"/>`,
		"fallback": "game-icons:cross-flare",
	});
}

export default Component;
