import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_2u1ybfx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_2u1ybfx"/>`,
		"fallback": "game-icons:arrowed",
	});
}

export default Component;
