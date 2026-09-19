import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmpzvobal.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmpzvobal"/>`,
		"fallback": "game-icons:abstract-027",
	});
}

export default Component;
