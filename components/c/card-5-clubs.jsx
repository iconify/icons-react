import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isfks3eqz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isfks3eqz"/>`,
		"fallback": "game-icons:card-5-clubs",
	});
}

export default Component;
