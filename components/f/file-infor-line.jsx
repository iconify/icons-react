import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4auy7bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4auy7bqi"/>`,
		"fallback": "mingcute:file-infor-line",
	});
}

export default Component;
