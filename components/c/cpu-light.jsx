import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/utfgr2bmj.css';
import '../../css/d/dzw9pdpsm.css';
import '../../css/r/rplcjjj8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="utfgr2bmj"/><rect class="dzw9pdpsm"/><path class="rplcjjj8v"/></g>`,
		"fallback": "lets-icons:cpu-light",
	});
}

export default Component;
