import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/strcllb6z.css';
import '../../css/q/qy9mx_ure.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="strcllb6z"/><path class="qy9mx_ure"/></g>`,
		"fallback": "streamline-color:cloud-add-flat",
	});
}

export default Component;
