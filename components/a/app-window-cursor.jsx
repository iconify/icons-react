import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h01dy9bsz.css';
import '../../css/y/y-0e41x4q.css';
import '../../css/w/w4p31295l.css';
import '../../css/c/c4z0x4f8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h01dy9bsz"/><path class="y-0e41x4q"/><path class="w4p31295l"/><path class="c4z0x4f8s"/></g>`,
		"fallback": "andrsrxn:app-window-cursor",
	});
}

export default Component;
