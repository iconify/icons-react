import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agu2bybpn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agu2bybpn"/>`,
		"fallback": "game-icons:hourglass",
	});
}

export default Component;
