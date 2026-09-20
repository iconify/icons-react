import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s26z6pb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s26z6pb5r"/>`,
		"fallback": "tabler:arrow-badge-up",
	});
}

export default Component;
