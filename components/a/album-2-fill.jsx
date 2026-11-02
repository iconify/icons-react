import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrx_7bb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrx_7bb6s"/>`,
		"fallback": "mingcute:album-2-fill",
	});
}

export default Component;
