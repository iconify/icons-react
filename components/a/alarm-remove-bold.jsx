import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/of0b31xxy.css';
import '../../css/e/ect7f6bha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="of0b31xxy"/><path class="ect7f6bha"/></g>`,
		"fallback": "solar:alarm-remove-bold",
	});
}

export default Component;
