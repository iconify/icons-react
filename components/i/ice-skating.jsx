import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-yg5n77r.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-yg5n77r"/>`,
		"fallback": "map:ice-skating",
	});
}

export default Component;
