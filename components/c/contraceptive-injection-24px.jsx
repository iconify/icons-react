import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y6pxabcma.css';
import '../../css/j/jvtnmront.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y6pxabcma"/><path class="jvtnmront"/></g>`,
		"fallback": "healthicons:contraceptive-injection-24px",
	});
}

export default Component;
