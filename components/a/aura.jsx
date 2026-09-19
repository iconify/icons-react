import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbo437b8h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbo437b8h"/>`,
		"fallback": "game-icons:aura",
	});
}

export default Component;
