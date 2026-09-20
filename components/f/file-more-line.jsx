import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmu7ij10d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmu7ij10d"/>`,
		"fallback": "mingcute:file-more-line",
	});
}

export default Component;
