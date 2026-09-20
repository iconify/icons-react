import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa4_z_bxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa4_z_bxc"/>`,
		"fallback": "mingcute:ease-in-fill",
	});
}

export default Component;
