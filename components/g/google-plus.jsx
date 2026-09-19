import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0ijd5bxg.css';

const viewBox = {"width":2304,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0ijd5bxg"/>`,
		"fallback": "fa:google-plus",
	});
}

export default Component;
