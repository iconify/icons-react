import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7yp61bdc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7yp61bdc"/>`,
		"fallback": "game-icons:fish-bucket",
	});
}

export default Component;
