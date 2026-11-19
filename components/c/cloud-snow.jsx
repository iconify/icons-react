import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-m-98b_p.css';
import '../../css/r/rs0wrok6f.css';
import '../../css/m/mc3p6_0qk.css';
import '../../css/j/jncdh4bhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h-m-98b_p"/><path class="rs0wrok6f"/><path class="mc3p6_0qk"/><path class="jncdh4bhu"/></g>`,
		"fallback": "andrsrxn:cloud-snow",
	});
}

export default Component;
