import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/msb8e_b6z.css';
import '../../css/i/ijx1vjoex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="msb8e_b6z"/><path class="ijx1vjoex"/></g>`,
		"fallback": "reicon:handshake-duotone",
	});
}

export default Component;
