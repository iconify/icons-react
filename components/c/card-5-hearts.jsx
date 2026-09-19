import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptvz3z25y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptvz3z25y"/>`,
		"fallback": "game-icons:card-5-hearts",
	});
}

export default Component;
