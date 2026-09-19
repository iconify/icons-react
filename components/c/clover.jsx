import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wextjnb4p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wextjnb4p"/>`,
		"fallback": "game-icons:clover",
	});
}

export default Component;
