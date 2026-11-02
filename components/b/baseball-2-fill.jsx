import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpszd2bkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpszd2bkp"/>`,
		"fallback": "mingcute:baseball-2-fill",
	});
}

export default Component;
