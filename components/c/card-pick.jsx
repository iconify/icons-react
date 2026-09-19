import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afw2xcz8r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afw2xcz8r"/>`,
		"fallback": "game-icons:card-pick",
	});
}

export default Component;
