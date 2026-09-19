import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj1h_n8dt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj1h_n8dt"/>`,
		"fallback": "game-icons:deshret-red-crown",
	});
}

export default Component;
