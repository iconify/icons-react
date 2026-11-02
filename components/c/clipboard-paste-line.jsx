import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay5-2y51q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay5-2y51q"/>`,
		"fallback": "mingcute:clipboard-paste-line",
	});
}

export default Component;
