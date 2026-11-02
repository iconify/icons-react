import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jheg6db2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jheg6db2n"/>`,
		"fallback": "mingcute:heart-minus-line",
	});
}

export default Component;
