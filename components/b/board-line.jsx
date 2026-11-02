import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae7fe4pgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae7fe4pgc"/>`,
		"fallback": "mingcute:board-line",
	});
}

export default Component;
