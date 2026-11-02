import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mia6fe8ka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mia6fe8ka"/>`,
		"fallback": "mingcute:file-certificate-fill",
	});
}

export default Component;
