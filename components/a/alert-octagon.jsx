import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_4kpbots.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_4kpbots"/>`,
		"fallback": "tabler:alert-octagon",
	});
}

export default Component;
