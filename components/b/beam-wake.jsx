import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci8gprbly.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci8gprbly"/>`,
		"fallback": "game-icons:beam-wake",
	});
}

export default Component;
