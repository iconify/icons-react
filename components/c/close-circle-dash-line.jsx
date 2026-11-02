import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryo1eccnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryo1eccnn"/>`,
		"fallback": "mingcute:close-circle-dash-line",
	});
}

export default Component;
