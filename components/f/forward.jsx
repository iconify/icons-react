import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf0ka5mro.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vf0ka5mro"/>`,
		"fallback": "picon:forward",
	});
}

export default Component;
