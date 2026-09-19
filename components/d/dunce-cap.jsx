import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqdwd_bxo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqdwd_bxo"/>`,
		"fallback": "game-icons:dunce-cap",
	});
}

export default Component;
