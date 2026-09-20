import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atbu4hsrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atbu4hsrl"/>`,
		"fallback": "mingcute:bell-ringing-line",
	});
}

export default Component;
