import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh0tp9bzx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh0tp9bzx"/>`,
		"fallback": "game-icons:fleur-de-lys",
	});
}

export default Component;
