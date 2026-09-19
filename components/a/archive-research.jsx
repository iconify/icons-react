import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd9zgnr0r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd9zgnr0r"/>`,
		"fallback": "game-icons:archive-research",
	});
}

export default Component;
