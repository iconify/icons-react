import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ern829bvn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ern829bvn"/>`,
		"fallback": "game-icons:ice-cream-scoop",
	});
}

export default Component;
