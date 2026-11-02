import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azl0z91ja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azl0z91ja"/>`,
		"fallback": "mingcute:file-terminal-line",
	});
}

export default Component;
