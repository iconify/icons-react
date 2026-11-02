import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l61a34b0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l61a34b0v"/>`,
		"fallback": "mingcute:file-zip-line",
	});
}

export default Component;
