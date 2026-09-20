import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/ct5ahjvdj.css';
import '../../css/g/g6h4zm40u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ct5ahjvdj"/><path class="g6h4zm40u"/></g>`,
		"fallback": "streamline-freehand:business-metaphor-shark",
	});
}

export default Component;
