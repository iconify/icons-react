import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg3lhxc0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg3lhxc0h"/>`,
		"fallback": "mingcute:brain-fill",
	});
}

export default Component;
