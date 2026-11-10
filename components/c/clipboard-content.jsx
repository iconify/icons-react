import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m9swzab_x.css';
import '../../css/q/q0icmu16l.css';
import '../../css/o/obupphvdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m9swzab_x"/><path class="q0icmu16l"/><path class="obupphvdh"/></g>`,
		"fallback": "andrsrxn:clipboard-content",
	});
}

export default Component;
