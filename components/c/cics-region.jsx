import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8hewfc3o.css';
import '../../css/b/b_p-ebbmt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8hewfc3o"/><path class="b_p-ebbmt"/>`,
		"fallback": "carbon:cics-region",
	});
}

export default Component;
