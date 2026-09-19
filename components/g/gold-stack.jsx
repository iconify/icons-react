import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkxu917fa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkxu917fa"/>`,
		"fallback": "game-icons:gold-stack",
	});
}

export default Component;
