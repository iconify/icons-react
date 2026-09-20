import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g8nvjhblg.css';
import '../../css/g/gxi6uybma.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="g8nvjhblg"/><path class="gxi6uybma"/></g>`,
		"fallback": "streamline:food-popcorn-cook-corn-movie-snack-cooking-nutrition-bake",
	});
}

export default Component;
