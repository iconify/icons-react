import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0dhg0k_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0dhg0k_s"/>`,
		"fallback": "tabler:arrow-back",
	});
}

export default Component;
