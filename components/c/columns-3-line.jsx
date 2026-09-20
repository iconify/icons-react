import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnpfy9s3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnpfy9s3u"/>`,
		"fallback": "mingcute:columns-3-line",
	});
}

export default Component;
