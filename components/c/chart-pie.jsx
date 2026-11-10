import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gr-u_gurp.css';
import '../../css/b/bt9-2rbpz.css';
import '../../css/u/u6nmo6bno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gr-u_gurp"/><circle class="bt9-2rbpz"/><path class="u6nmo6bno"/></g>`,
		"fallback": "andrsrxn:chart-pie",
	});
}

export default Component;
