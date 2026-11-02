import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2p9d0b6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2p9d0b6p"/>`,
		"fallback": "mingcute:badge-info-fill",
	});
}

export default Component;
