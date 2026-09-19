import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drgbd2w6h.css';
import '../../css/c/c3_ibvh4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drgbd2w6h"/><path class="c3_ibvh4n"/>`,
		"fallback": "bx:chevrons-down",
	});
}

export default Component;
