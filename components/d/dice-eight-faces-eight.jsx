import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blqt9htem.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blqt9htem"/>`,
		"fallback": "game-icons:dice-eight-faces-eight",
	});
}

export default Component;
