import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdv25pn-b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdv25pn-b"/>`,
		"fallback": "game-icons:hood",
	});
}

export default Component;
