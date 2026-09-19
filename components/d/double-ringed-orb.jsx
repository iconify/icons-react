import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe5m685gm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe5m685gm"/>`,
		"fallback": "game-icons:double-ringed-orb",
	});
}

export default Component;
