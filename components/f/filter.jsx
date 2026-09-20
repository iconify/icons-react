import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mb0epnoxf.css';
import '../../css/h/h2kfwdbij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mb0epnoxf"/><path class="h2kfwdbij"/></g>`,
		"fallback": "tdesign:filter",
	});
}

export default Component;
