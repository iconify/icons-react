import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-crvsbxh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-crvsbxh"/>`,
		"fallback": "game-icons:dew",
	});
}

export default Component;
