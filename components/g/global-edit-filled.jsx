import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jrw1gn2dk.css';
import '../../css/h/hr4f9zbxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jrw1gn2dk"/><path class="hr4f9zbxb"/></g>`,
		"fallback": "reicon:global-edit-filled",
	});
}

export default Component;
