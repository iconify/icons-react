import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dnz4a9mlt.css';
import '../../css/x/xu0ue5bgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dnz4a9mlt"/><path class="xu0ue5bgh"/></g>`,
		"fallback": "streamline-freehand-color:data-transfer-sync",
	});
}

export default Component;
