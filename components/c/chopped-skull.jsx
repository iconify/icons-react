import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-5-ogo-z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-5-ogo-z"/>`,
		"fallback": "game-icons:chopped-skull",
	});
}

export default Component;
