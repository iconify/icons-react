import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpf6b1bud.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpf6b1bud"/>`,
		"fallback": "game-icons:imp-laugh",
	});
}

export default Component;
