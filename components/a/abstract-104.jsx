import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqec81kpt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqec81kpt"/>`,
		"fallback": "game-icons:abstract-104",
	});
}

export default Component;
