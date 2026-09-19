import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkk2jqbph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkk2jqbph"/>`,
		"fallback": "bx:bxs-down-arrow-circle",
	});
}

export default Component;
