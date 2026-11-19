import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rs0wrok6f.css';
import '../../css/g/g06pilbnk.css';
import '../../css/h/h-m-98b_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rs0wrok6f"/><path class="g06pilbnk"/><path class="h-m-98b_p"/></g>`,
		"fallback": "andrsrxn:cloud-drizzle",
	});
}

export default Component;
