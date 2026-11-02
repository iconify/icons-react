import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oti0a6g5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oti0a6g5e"/>`,
		"fallback": "mingcute:brick-wall-fire-fill",
	});
}

export default Component;
