import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ila-1wb8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ila-1wb8i"/>`,
		"fallback": "mingcute:abs-line",
	});
}

export default Component;
