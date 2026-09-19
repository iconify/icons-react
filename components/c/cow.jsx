import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj-8enh6r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj-8enh6r"/>`,
		"fallback": "game-icons:cow",
	});
}

export default Component;
