import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4tnwe4rn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4tnwe4rn"/>`,
		"fallback": "game-icons:air-man",
	});
}

export default Component;
