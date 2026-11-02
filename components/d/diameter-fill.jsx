import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa3whccfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa3whccfx"/>`,
		"fallback": "mingcute:diameter-fill",
	});
}

export default Component;
