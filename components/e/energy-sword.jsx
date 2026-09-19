import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llwij-lic.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llwij-lic"/>`,
		"fallback": "game-icons:energy-sword",
	});
}

export default Component;
