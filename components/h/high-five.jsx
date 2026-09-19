import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea9az7bry.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea9az7bry"/>`,
		"fallback": "game-icons:high-five",
	});
}

export default Component;
