import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/umhashljv.css';
import '../../css/b/budt_2bew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="umhashljv"/><path class="budt_2bew"/></g>`,
		"fallback": "withicons-retro:hash",
	});
}

export default Component;
