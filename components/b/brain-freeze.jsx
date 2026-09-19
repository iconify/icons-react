import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj243w90a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj243w90a"/>`,
		"fallback": "game-icons:brain-freeze",
	});
}

export default Component;
