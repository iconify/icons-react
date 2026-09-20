import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mrvhw_3nl.css';
import '../../css/n/n-l3crrqe.css';
import '../../css/x/xx2-m8bof.css';
import '../../css/u/ua8gkjbyj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mrvhw_3nl"/><path class="n-l3crrqe"/><path class="xx2-m8bof"/><path class="ua8gkjbyj"/></g>`,
		"fallback": "streamline-color:button-fast-forward-2",
	});
}

export default Component;
