import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l65jl6blh.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l65jl6blh"/>`,
		"fallback": "whh:book",
	});
}

export default Component;
