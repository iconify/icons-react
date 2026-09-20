import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ohdlwlbpi.css';
import '../../css/s/s8dgoxb2t.css';
import '../../css/c/c97vutbhc.css';
import '../../css/d/dvpu84fxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ohdlwlbpi"/><path class="s8dgoxb2t"/><path class="c97vutbhc"/><path class="dvpu84fxo"/></g>`,
		"fallback": "lets-icons:group-light",
	});
}

export default Component;
