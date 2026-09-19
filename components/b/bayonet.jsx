import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhfck23re.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhfck23re"/>`,
		"fallback": "game-icons:bayonet",
	});
}

export default Component;
