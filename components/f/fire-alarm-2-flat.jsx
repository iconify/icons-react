import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/glqneebgb.css';
import '../../css/v/vh5_ej_7u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="glqneebgb"/><path class="vh5_ej_7u"/></g>`,
		"fallback": "streamline-flex-color:fire-alarm-2-flat",
	});
}

export default Component;
