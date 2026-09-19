import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cgk_-5b9g.css';
import '../../css/o/og747-8lh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cgk_-5b9g"/><path class="og747-8lh"/></g>`,
		"fallback": "iconoir:bubble-xmark-solid",
	});
}

export default Component;
