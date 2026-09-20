import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vrc_eibqz.css';
import '../../css/y/ypgt683lt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vrc_eibqz"/><path class="ypgt683lt"/></g>`,
		"fallback": "streamline-flex-color:fahrenheit-flat",
	});
}

export default Component;
