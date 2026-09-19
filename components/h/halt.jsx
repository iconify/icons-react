import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ievgnrb9f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ievgnrb9f"/>`,
		"fallback": "game-icons:halt",
	});
}

export default Component;
