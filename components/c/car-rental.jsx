import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaqegsb9x.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jaqegsb9x"/>`,
		"fallback": "map:car-rental",
	});
}

export default Component;
