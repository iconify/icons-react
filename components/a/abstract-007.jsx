import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5k7lbbvc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5k7lbbvc"/>`,
		"fallback": "game-icons:abstract-007",
	});
}

export default Component;
