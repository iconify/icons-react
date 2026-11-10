import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djwbyxpsl.css';
import '../../css/u/uo8nny_ui.css';
import '../../css/h/h8o6mb8fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="djwbyxpsl"/><path class="uo8nny_ui"/><path class="h8o6mb8fq"/></g>`,
		"fallback": "andrsrxn:box-open",
	});
}

export default Component;
