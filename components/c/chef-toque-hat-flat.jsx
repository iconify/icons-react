import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m3guk1bho.css';
import '../../css/l/l6iy35bkh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m3guk1bho"/><path class="l6iy35bkh"/></g>`,
		"fallback": "streamline-flex-color:chef-toque-hat-flat",
	});
}

export default Component;
