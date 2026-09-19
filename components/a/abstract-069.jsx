import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lib4uh01g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lib4uh01g"/>`,
		"fallback": "game-icons:abstract-069",
	});
}

export default Component;
