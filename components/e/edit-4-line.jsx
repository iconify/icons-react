import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvyv4v4qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvyv4v4qf"/>`,
		"fallback": "mingcute:edit-4-line",
	});
}

export default Component;
