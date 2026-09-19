import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fur9vwhrn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fur9vwhrn"/>`,
		"fallback": "game-icons:crossed-sabres",
	});
}

export default Component;
