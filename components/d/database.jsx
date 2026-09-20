import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jpg5kfbng.css';
import '../../css/q/q1u62idxs.css';
import '../../css/b/b2w8ovque.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jpg5kfbng"/><path class="q1u62idxs"/><path class="b2w8ovque"/></g>`,
		"fallback": "streamline-freehand:database",
	});
}

export default Component;
