import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lb34b3syz.css';
import '../../css/h/hjfiyp-px.css';
import '../../css/h/hrjatl9nv.css';
import '../../css/c/cp-zj9t8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lb34b3syz wm-deco"/><path class="hjfiyp-px wm-deco"/><path class="hrjatl9nv"/><path class="cp-zj9t8y"/></g>`,
		"fallback": "withicons:close-blueprint",
	});
}

export default Component;
