import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/q/qa60wpbeh.css';
import '../../css/x/xm9logb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="qa60wpbeh"/><path class="xm9logb_l"/></g>`,
		"fallback": "lets-icons:direction-alt-light",
	});
}

export default Component;
