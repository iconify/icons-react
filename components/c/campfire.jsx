import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o75hfuw-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o75hfuw-h"/>`,
		"fallback": "game-icons:campfire",
	});
}

export default Component;
