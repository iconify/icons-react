import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0ch54b6f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0ch54b6f"/>`,
		"fallback": "teenyicons:border-bottom-outline",
	});
}

export default Component;
