import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9kos04xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9kos04xh"/>`,
		"fallback": "mingcute:database-zap-fill",
	});
}

export default Component;
