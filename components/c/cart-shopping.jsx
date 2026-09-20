import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lw7rcr6sy.css';
import '../../css/k/ki4o1yb-o.css';
import '../../css/y/y2fri503s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lw7rcr6sy"/><circle class="ki4o1yb-o"/><circle class="y2fri503s"/></g>`,
		"fallback": "meteor-icons:cart-shopping",
	});
}

export default Component;
