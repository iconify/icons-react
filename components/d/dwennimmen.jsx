import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3r3j8blu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3r3j8blu"/>`,
		"fallback": "game-icons:dwennimmen",
	});
}

export default Component;
