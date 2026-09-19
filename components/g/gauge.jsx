import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3o5_cbax.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3o5_cbax"/>`,
		"fallback": "entypo:gauge",
	});
}

export default Component;
