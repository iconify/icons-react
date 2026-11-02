import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgafz5b0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgafz5b0f"/>`,
		"fallback": "mingcute:forward-line",
	});
}

export default Component;
