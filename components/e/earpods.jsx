import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p-a3-bbcq.css';
import '../../css/y/yxkzfvrij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p-a3-bbcq"/><path class="yxkzfvrij"/></g>`,
		"fallback": "streamline-freehand:earpods",
	});
}

export default Component;
