import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn47rw0ww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn47rw0ww"/>`,
		"fallback": "mingcute:card-sim-line",
	});
}

export default Component;
