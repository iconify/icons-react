import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rngp1fbyn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rngp1fbyn"/>`,
		"fallback": "la:horse-head",
	});
}

export default Component;
