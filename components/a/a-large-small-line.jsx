import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbe-qwqtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbe-qwqtj"/>`,
		"fallback": "mingcute:a-large-small-line",
	});
}

export default Component;
