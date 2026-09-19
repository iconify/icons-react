import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8zny-epf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8zny-epf"/>`,
		"fallback": "game-icons:female-legs",
	});
}

export default Component;
