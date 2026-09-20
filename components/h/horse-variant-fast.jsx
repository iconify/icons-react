import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owj4jnl7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owj4jnl7w"/>`,
		"fallback": "mdi:horse-variant-fast",
	});
}

export default Component;
