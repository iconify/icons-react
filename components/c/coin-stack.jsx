import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elcz3zykd.css';
import '../../css/q/q_tt9nb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer elcz3zykd"/><path class="duoicon-primary-layer q_tt9nb9z"/>`,
		"fallback": "duo-icons:coin-stack",
	});
}

export default Component;
