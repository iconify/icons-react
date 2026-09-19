import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onefyxo3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onefyxo3t"/>`,
		"fallback": "game-icons:akhet",
	});
}

export default Component;
