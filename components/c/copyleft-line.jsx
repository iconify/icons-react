import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxo6sslyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxo6sslyx"/>`,
		"fallback": "mingcute:copyleft-line",
	});
}

export default Component;
