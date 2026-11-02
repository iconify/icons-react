import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1sk-pb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1sk-pb3p"/>`,
		"fallback": "mingcute:banknote-x-line",
	});
}

export default Component;
