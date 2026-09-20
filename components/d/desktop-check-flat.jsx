import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x5j-a5b5w.css';
import '../../css/y/y1m22nb_w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x5j-a5b5w"/><path class="y1m22nb_w"/></g>`,
		"fallback": "streamline-color:desktop-check-flat",
	});
}

export default Component;
