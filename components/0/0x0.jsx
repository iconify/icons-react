import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctqxyqbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctqxyqbtu"/>`,
		"fallback": "token:0x0",
	});
}

export default Component;
