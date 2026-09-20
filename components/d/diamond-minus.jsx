import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl6l9g10r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl6l9g10r"/>`,
		"fallback": "lucide:diamond-minus",
	});
}

export default Component;
