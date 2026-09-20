import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0pitqbms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0pitqbms"/>`,
		"fallback": "thesvg-color:greasy-fork",
	});
}

export default Component;
