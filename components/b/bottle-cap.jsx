import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4wl_ub8n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4wl_ub8n"/>`,
		"fallback": "game-icons:bottle-cap",
	});
}

export default Component;
