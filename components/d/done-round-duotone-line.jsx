import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2wsm68jl.css';
import '../../css/l/ltdnwzb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="f2wsm68jl"/><path class="ltdnwzb_l"/></g>`,
		"fallback": "lets-icons:done-round-duotone-line",
	});
}

export default Component;
