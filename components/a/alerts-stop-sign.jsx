import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p5-e2d1fh.css';
import '../../css/x/x5gbn2yma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p5-e2d1fh"/><path class="x5gbn2yma"/></g>`,
		"fallback": "streamline-freehand:alerts-stop-sign",
	});
}

export default Component;
