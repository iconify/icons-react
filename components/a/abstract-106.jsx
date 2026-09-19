import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxzb1cc6a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxzb1cc6a"/>`,
		"fallback": "game-icons:abstract-106",
	});
}

export default Component;
