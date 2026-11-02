import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-p6ddb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-p6ddb-f"/>`,
		"fallback": "mingcute:cursor-text-line",
	});
}

export default Component;
