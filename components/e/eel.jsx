import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky3lmks1w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky3lmks1w"/>`,
		"fallback": "game-icons:eel",
	});
}

export default Component;
