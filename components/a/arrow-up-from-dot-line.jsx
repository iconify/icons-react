import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu2ac0b6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu2ac0b6r"/>`,
		"fallback": "mingcute:arrow-up-from-dot-line",
	});
}

export default Component;
