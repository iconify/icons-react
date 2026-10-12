import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p7il8qmhh.css';
import '../../css/l/le910wibb.css';
import '../../css/t/t1nuh1b-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p7il8qmhh"/><circle transform="rotate(90 12 12)" class="le910wibb"/><path class="t1nuh1b-w"/></g>`,
		"fallback": "andrsrxn:crosshair",
	});
}

export default Component;
