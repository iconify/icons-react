import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zb2kedx8a.css';
import '../../css/w/w-ry3ub8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zb2kedx8a"/><path class="w-ry3ub8b"/></g>`,
		"fallback": "solar:dollar-bold-duotone",
	});
}

export default Component;
