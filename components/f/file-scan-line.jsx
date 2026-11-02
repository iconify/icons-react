import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-3y3_nir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-3y3_nir"/>`,
		"fallback": "mingcute:file-scan-line",
	});
}

export default Component;
