import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz1bfel1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz1bfel1b"/>`,
		"fallback": "mingcute:folder-forbid-line",
	});
}

export default Component;
