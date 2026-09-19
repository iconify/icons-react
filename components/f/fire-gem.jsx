import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckwx5iwly.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckwx5iwly"/>`,
		"fallback": "game-icons:fire-gem",
	});
}

export default Component;
