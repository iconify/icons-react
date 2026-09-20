import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnm-k_b6c.css';
import '../../css/r/ro1if709p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnm-k_b6c"/><path class="ro1if709p"/></g>`,
		"fallback": "tdesign:graphviz",
	});
}

export default Component;
