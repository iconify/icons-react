import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0dxcsb9s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0dxcsb9s"/>`,
		"fallback": "game-icons:crook-flail",
	});
}

export default Component;
