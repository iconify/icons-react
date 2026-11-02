import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl_2il82l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl_2il82l"/>`,
		"fallback": "mingcute:cellphone-line",
	});
}

export default Component;
