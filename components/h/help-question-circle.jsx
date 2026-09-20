import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f63ef3j3q.css';
import '../../css/e/ehl97xb1v.css';
import '../../css/l/l0hes9c6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="f63ef3j3q"/><path class="ehl97xb1v"/><path class="l0hes9c6p"/></g>`,
		"fallback": "streamline-freehand:help-question-circle",
	});
}

export default Component;
