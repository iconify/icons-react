import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x77lglb-y.css';
import '../../css/f/fk_ckkm7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="x77lglb-y"/><path class="fk_ckkm7r"/></g>`,
		"fallback": "withicons-retro:arrow-up-from-line",
	});
}

export default Component;
