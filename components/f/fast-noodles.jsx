import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7tauzlnp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7tauzlnp"/>`,
		"fallback": "game-icons:fast-noodles",
	});
}

export default Component;
