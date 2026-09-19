import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_yam7wiw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_yam7wiw"/>`,
		"fallback": "game-icons:cactus",
	});
}

export default Component;
