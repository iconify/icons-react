import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h11o2yb-h.css';
import '../../css/q/qtdwuhbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="h11o2yb-h"/><path class="qtdwuhbzv"/></g>`,
		"fallback": "withicons-retro:chevrons-up",
	});
}

export default Component;
