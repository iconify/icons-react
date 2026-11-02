import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9wb99y_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9wb99y_r"/>`,
		"fallback": "mingcute:archive-x-line",
	});
}

export default Component;
