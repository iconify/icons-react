import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcg36hbnc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcg36hbnc"/>`,
		"fallback": "game-icons:heavy-timer",
	});
}

export default Component;
