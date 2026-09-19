import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce2nadbpw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce2nadbpw"/>`,
		"fallback": "game-icons:airplane",
	});
}

export default Component;
