import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw3s8g7rk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw3s8g7rk"/>`,
		"fallback": "game-icons:falling-star",
	});
}

export default Component;
