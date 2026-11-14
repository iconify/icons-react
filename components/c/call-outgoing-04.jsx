import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j_u3vybip.css';
import '../../css/t/t5j98hf7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j_u3vybip"/><path class="t5j98hf7w"/></g>`,
		"fallback": "hugeicons:call-outgoing-04",
	});
}

export default Component;
