import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbjah4bnu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbjah4bnu"/>`,
		"fallback": "game-icons:cannon-ball",
	});
}

export default Component;
