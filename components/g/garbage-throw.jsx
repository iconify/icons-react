import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k1s7zllqe.css';
import '../../css/g/gcn4drbda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k1s7zllqe"/><path class="gcn4drbda"/></g>`,
		"fallback": "streamline-freehand:garbage-throw",
	});
}

export default Component;
