import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1eird_2e.css';
import '../../css/u/uu2dy8rgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1eird_2e"/><path class="uu2dy8rgz"/>`,
		"fallback": "boxicons:dice-roll",
	});
}

export default Component;
