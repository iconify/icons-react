import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9k9a11_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9k9a11_b"/>`,
		"fallback": "si:dashboard-vert-line",
	});
}

export default Component;
