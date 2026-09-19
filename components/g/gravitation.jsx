import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnz76ruct.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnz76ruct"/>`,
		"fallback": "game-icons:gravitation",
	});
}

export default Component;
