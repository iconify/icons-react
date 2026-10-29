import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k6yc5_l4b.css';
import '../../css/e/eznhzablb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k6yc5_l4b"/><path class="eznhzablb"/></g>`,
		"fallback": "withicons:glasses-duo",
	});
}

export default Component;
