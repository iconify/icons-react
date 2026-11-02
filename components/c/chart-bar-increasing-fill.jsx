import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc3b0korc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc3b0korc"/>`,
		"fallback": "mingcute:chart-bar-increasing-fill",
	});
}

export default Component;
