import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kres2h2xx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kres2h2xx"/>`,
		"fallback": "mingcute:file-forbid-line",
	});
}

export default Component;
