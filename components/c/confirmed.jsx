import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj0_4iwbe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj0_4iwbe"/>`,
		"fallback": "game-icons:confirmed",
	});
}

export default Component;
