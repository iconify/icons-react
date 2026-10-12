import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-zgppq4g.css';
import '../../css/z/zy_l2lb3p.css';
import '../../css/s/s9cto8mbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d-zgppq4g"/><path class="zy_l2lb3p"/><path class="s9cto8mbf"/></g>`,
		"fallback": "andrsrxn:house-plug",
	});
}

export default Component;
