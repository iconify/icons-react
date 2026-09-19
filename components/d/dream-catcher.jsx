import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie3otbb4o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie3otbb4o"/>`,
		"fallback": "game-icons:dream-catcher",
	});
}

export default Component;
