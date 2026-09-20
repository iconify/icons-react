import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fh6et46de.css';
import '../../css/q/qxbbo4bju.css';
import '../../css/u/up3-8gucx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fh6et46de"/><path class="qxbbo4bju"/><circle class="up3-8gucx"/></g>`,
		"fallback": "streamline:food-cheese-2-cook-cheese-animal-products-cooking-nutrition-dairy-food",
	});
}

export default Component;
