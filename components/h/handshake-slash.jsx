import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f65yucmlq.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f65yucmlq"/>`,
		"fallback": "fa-solid:handshake-slash",
	});
}

export default Component;
