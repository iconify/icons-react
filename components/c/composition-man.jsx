import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y30rvl7ql.css';
import '../../css/s/simw-zbxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y30rvl7ql"/><path class="simw-zbxg"/></g>`,
		"fallback": "streamline-freehand:composition-man",
	});
}

export default Component;
