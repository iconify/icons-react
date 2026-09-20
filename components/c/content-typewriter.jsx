import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/caqmvrbir.css';
import '../../css/o/oqetv0bid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="caqmvrbir"/><path class="oqetv0bid"/></g>`,
		"fallback": "streamline-freehand:content-typewriter",
	});
}

export default Component;
