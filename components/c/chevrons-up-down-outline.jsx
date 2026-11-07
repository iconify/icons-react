import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftg7u_q6r.css';
import '../../css/c/ce_1shb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftg7u_q6r"/><path class="ce_1shb3n"/>`,
		"fallback": "solar:chevrons-up-down-outline",
	});
}

export default Component;
