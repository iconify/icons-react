import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrax578cf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrax578cf"/>`,
		"fallback": "game-icons:fulguro-punch",
	});
}

export default Component;
