import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3pk7wb9n.css';
import '../../css/d/d325_0h8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3pk7wb9n"/><path class="d325_0h8a"/>`,
		"fallback": "boxicons:arrow-up-wide-narrow-filled",
	});
}

export default Component;
