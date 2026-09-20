import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tvvtuj35v.css';
import '../../css/q/qjwa93bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tvvtuj35v"/><path class="qjwa93bjo"/></g>`,
		"fallback": "streamline-freehand:circus-clown-1",
	});
}

export default Component;
