import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3zsr3b5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3zsr3b5w"/>`,
		"fallback": "guidance:information-desk-symbol",
	});
}

export default Component;
