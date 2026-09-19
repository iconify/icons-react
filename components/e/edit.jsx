import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xs9iz4-ll.css';
import '../../css/n/ntjhsq57z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xs9iz4-ll"/><path class="ntjhsq57z"/></g>`,
		"fallback": "akar-icons:edit",
	});
}

export default Component;
