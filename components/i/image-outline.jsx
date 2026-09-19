import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhrxheaqf.css';
import '../../css/p/pq_3tfnsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhrxheaqf"/><path clip-rule="evenodd" class="pq_3tfnsc"/>`,
		"fallback": "basil:image-outline",
	});
}

export default Component;
