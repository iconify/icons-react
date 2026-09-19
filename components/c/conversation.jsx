import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy_-jrb0l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy_-jrb0l"/>`,
		"fallback": "game-icons:conversation",
	});
}

export default Component;
