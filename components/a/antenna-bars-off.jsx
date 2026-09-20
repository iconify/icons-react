import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xac6b2u_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xac6b2u_n"/>`,
		"fallback": "tabler:antenna-bars-off",
	});
}

export default Component;
