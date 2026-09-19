import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxp70fsne.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxp70fsne"/>`,
		"fallback": "game-icons:fried-eggs",
	});
}

export default Component;
