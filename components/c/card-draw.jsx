import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yda_7p-6a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yda_7p-6a"/>`,
		"fallback": "game-icons:card-draw",
	});
}

export default Component;
