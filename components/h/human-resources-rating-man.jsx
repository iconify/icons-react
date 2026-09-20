import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bzlbpuy9d.css';
import '../../css/s/svx0nmbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bzlbpuy9d"/><path class="svx0nmbea"/></g>`,
		"fallback": "streamline-freehand:human-resources-rating-man",
	});
}

export default Component;
