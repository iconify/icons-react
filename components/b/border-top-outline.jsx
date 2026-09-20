import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j50tsqbva.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j50tsqbva"/>`,
		"fallback": "teenyicons:border-top-outline",
	});
}

export default Component;
