import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izkn71bmb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izkn71bmb"/>`,
		"fallback": "game-icons:ankh",
	});
}

export default Component;
