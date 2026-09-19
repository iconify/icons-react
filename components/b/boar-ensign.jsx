import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq6_tcb-z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq6_tcb-z"/>`,
		"fallback": "game-icons:boar-ensign",
	});
}

export default Component;
