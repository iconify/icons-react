import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/ci-sjcc2y.css';
import '../../css/x/x9d0xubji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ci-sjcc2y"/><path class="x9d0xubji"/></g>`,
		"fallback": "solar:alarm-pause-outline",
	});
}

export default Component;
