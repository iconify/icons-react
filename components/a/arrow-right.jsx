import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h6xu0_eiq.css';
import '../../css/a/aja3j5-jl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h6xu0_eiq"/><path class="aja3j5-jl"/></g>`,
		"fallback": "pixelarticons:arrow-right",
	});
}

export default Component;
