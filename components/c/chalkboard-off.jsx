import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uhxur4cag.css';
import '../../css/n/n4a-sla6i.css';
import '../../css/m/mtgc5t_9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uhxur4cag"/><path class="n4a-sla6i"/><path class="mtgc5t_9r"/></g>`,
		"fallback": "andrsrxn:chalkboard-off",
	});
}

export default Component;
