import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdb3dobzs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdb3dobzs"/>`,
		"fallback": "game-icons:abstract-119",
	});
}

export default Component;
