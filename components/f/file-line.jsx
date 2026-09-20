import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed5-32ims.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed5-32ims"/>`,
		"fallback": "mingcute:file-line",
	});
}

export default Component;
