import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp5p-qjme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xp5p-qjme"/>`,
		"fallback": "mingcute:chart-pie-fill",
	});
}

export default Component;
