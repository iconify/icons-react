import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-a7t_fjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-a7t_fjq"/>`,
		"fallback": "mingcute:game-1-fill",
	});
}

export default Component;
