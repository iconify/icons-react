import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hc0y_bojr.css';
import '../../css/v/v0npaklfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hc0y_bojr"/><path class="v0npaklfi"/></g>`,
		"fallback": "lucide-extended:headphones-duotone",
	});
}

export default Component;
