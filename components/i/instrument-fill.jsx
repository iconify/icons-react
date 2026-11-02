import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq5d24bbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq5d24bbx"/>`,
		"fallback": "mingcute:instrument-fill",
	});
}

export default Component;
