import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jywtkxo3g.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jywtkxo3g"/>`,
		"fallback": "zmdi:crop",
	});
}

export default Component;
