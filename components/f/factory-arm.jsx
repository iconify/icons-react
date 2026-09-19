import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj82vtfje.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj82vtfje"/>`,
		"fallback": "game-icons:factory-arm",
	});
}

export default Component;
