import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt4-l-b3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt4-l-b3z"/>`,
		"fallback": "mingcute:game-2-fill",
	});
}

export default Component;
