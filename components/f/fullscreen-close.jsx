import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn7wlqbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn7wlqbps"/>`,
		"fallback": "mdi-light:fullscreen-close",
	});
}

export default Component;
