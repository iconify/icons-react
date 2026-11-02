import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmjxt8bcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmjxt8bcd"/>`,
		"fallback": "mingcute:file-more-fill",
	});
}

export default Component;
