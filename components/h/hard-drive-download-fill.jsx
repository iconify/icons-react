import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys3s1y12f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys3s1y12f"/>`,
		"fallback": "mingcute:hard-drive-download-fill",
	});
}

export default Component;
