import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxzx2mk3k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxzx2mk3k"/>`,
		"fallback": "game-icons:abstract-110",
	});
}

export default Component;
