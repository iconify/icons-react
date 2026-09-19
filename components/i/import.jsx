import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo55s0bnf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo55s0bnf"/>`,
		"fallback": "bytesize:import",
	});
}

export default Component;
