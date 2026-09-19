import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax8xvyb9q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax8xvyb9q"/>`,
		"fallback": "game-icons:grouped-drops",
	});
}

export default Component;
