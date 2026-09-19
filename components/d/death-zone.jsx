import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl0n1cb4k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl0n1cb4k"/>`,
		"fallback": "game-icons:death-zone",
	});
}

export default Component;
