import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byn1rl6tp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byn1rl6tp"/>`,
		"fallback": "mdi:bell-remove-outline",
	});
}

export default Component;
