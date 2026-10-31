import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfv8xnp-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfv8xnp-m"/>`,
		"fallback": "coolicons:figma-fill-round",
	});
}

export default Component;
