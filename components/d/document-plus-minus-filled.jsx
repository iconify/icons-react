import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxxqbw4ah.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kxxqbw4ah"/>`,
		"fallback": "ix:document-plus-minus-filled",
	});
}

export default Component;
