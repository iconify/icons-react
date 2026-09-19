import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqaaf-3rv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqaaf-3rv"/>`,
		"fallback": "game-icons:goal-keeper",
	});
}

export default Component;
