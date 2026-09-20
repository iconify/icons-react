import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm4iy4btv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm4iy4btv"/>`,
		"fallback": "mingcute:heart-crack-line",
	});
}

export default Component;
