import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_jfne-ha.css';
import '../../css/b/b04w6ibzc.css';
import '../../css/x/xus_l3b-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="p_jfne-ha"/><path class="b04w6ibzc"/><path class="xus_l3b-y"/></g>`,
		"fallback": "lets-icons:del-alt-fill",
	});
}

export default Component;
