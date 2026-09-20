import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rome7ac6b.css';
import '../../css/s/sgvl5j1wg.css';
import '../../css/r/rawy54brq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rome7ac6b"/><path class="sgvl5j1wg"/><path class="rawy54brq"/></g>`,
		"fallback": "solar:bedside-table-bold",
	});
}

export default Component;
