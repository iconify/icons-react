import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl-5pmbed.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl-5pmbed"/>`,
		"fallback": "famicons:bowling-ball-sharp",
	});
}

export default Component;
