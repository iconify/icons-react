import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pszgp0b4j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pszgp0b4j"/>`,
		"fallback": "game-icons:bottled-shadow",
	});
}

export default Component;
