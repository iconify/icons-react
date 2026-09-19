import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpbff6b8t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpbff6b8t"/>`,
		"fallback": "game-icons:brazil",
	});
}

export default Component;
