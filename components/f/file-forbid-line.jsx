import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvti5845q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvti5845q"/>`,
		"fallback": "mingcute:file-forbid-line",
	});
}

export default Component;
