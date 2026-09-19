import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rwycg17id.css';
import '../../css/r/r5-ua8opy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rwycg17id"/><path class="r5-ua8opy"/></g>`,
		"fallback": "gg:edit-black-point",
	});
}

export default Component;
