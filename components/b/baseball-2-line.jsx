import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm9149b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm9149b3n"/>`,
		"fallback": "mingcute:baseball-2-line",
	});
}

export default Component;
