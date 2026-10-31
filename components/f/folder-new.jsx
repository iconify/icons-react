import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c4ez60cxn.css';
import '../../css/c/ce-j7kbvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c4ez60cxn"/><path class="ce-j7kbvm"/></g>`,
		"fallback": "struq:folder-new",
	});
}

export default Component;
