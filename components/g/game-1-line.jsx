import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksiy4it3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksiy4it3d"/>`,
		"fallback": "mingcute:game-1-line",
	});
}

export default Component;
