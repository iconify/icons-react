import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qtd4bhkgi.css';
import '../../css/v/v32w5wb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qtd4bhkgi"/><path class="v32w5wb9o"/></g>`,
		"fallback": "withicons-retro:chevron-right",
	});
}

export default Component;
