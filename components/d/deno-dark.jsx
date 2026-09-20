import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evnwlobir.css';

const viewBox = {"width":441,"height":441};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evnwlobir"/>`,
		"fallback": "thesvg-color:deno-dark",
	});
}

export default Component;
