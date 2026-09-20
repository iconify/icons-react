import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl42bbbnp.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl42bbbnp"/>`,
		"fallback": "memory:arrow-left-up",
	});
}

export default Component;
