import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t24y4nbna.css';
import '../../css/w/wfim7qbej.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t24y4nbna"/><path class="wfim7qbej"/></g>`,
		"fallback": "streamline-flex-color:information-circle-flat",
	});
}

export default Component;
