import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ect7f6bha.css';
import '../../css/c/c51eipe5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ect7f6bha"/><path class="c51eipe5r"/></g>`,
		"fallback": "solar:alarm-sleep-bold",
	});
}

export default Component;
