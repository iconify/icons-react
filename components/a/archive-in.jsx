import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sg-37_mjx.css';
import '../../css/t/ticc1-b1s.css';
import '../../css/p/phs1rybvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sg-37_mjx"/><path class="ticc1-b1s"/><path class="phs1rybvz"/></g>`,
		"fallback": "andrsrxn:archive-in",
	});
}

export default Component;
