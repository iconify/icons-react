import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr5js-58t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr5js-58t"/>`,
		"fallback": "game-icons:family-house",
	});
}

export default Component;
