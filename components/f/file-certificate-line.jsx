import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hruluy_dt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hruluy_dt"/>`,
		"fallback": "mingcute:file-certificate-line",
	});
}

export default Component;
