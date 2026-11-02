import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h517j2woy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h517j2woy"/>`,
		"fallback": "mingcute:bedside-table-line",
	});
}

export default Component;
