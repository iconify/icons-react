import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_jnz1lnv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_jnz1lnv"/>`,
		"fallback": "game-icons:black-hole-bolas",
	});
}

export default Component;
