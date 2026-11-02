import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq170-bdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq170-bdk"/>`,
		"fallback": "mingcute:file-scan-fill",
	});
}

export default Component;
