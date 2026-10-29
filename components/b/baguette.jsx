import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_2qpyv6f.css';
import '../../css/l/lg74i_drg.css';
import '../../css/q/qyd9uebyn.css';
import '../../css/e/et0l-injz.css';
import '../../css/c/cwia9x3de.css';
import '../../css/z/zyjvgkvdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d_2qpyv6f wm-k"/><path class="lg74i_drg wm-k"/><path class="qyd9uebyn wm-k"/><path class="et0l-injz wm-k"/><path class="cwia9x3de wm-shine"/><path class="wm-a zyjvgkvdy"/></g>`,
		"fallback": "withicons-anime:baguette",
	});
}

export default Component;
