import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbslk5mju.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbslk5mju"/>`,
		"fallback": "game-icons:dice-six-faces-six",
	});
}

export default Component;
