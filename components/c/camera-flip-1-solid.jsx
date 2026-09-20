import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/udi27cb1r.css';
import '../../css/z/zjnrt8vvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="udi27cb1r"/><path class="zjnrt8vvh"/></g>`,
		"fallback": "streamline-sharp:camera-flip-1-solid",
	});
}

export default Component;
