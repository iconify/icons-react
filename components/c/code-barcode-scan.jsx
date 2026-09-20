import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yr2l6rbiz.css';
import '../../css/q/qg-6j9b6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yr2l6rbiz"/><path class="qg-6j9b6o"/></g>`,
		"fallback": "streamline-freehand-color:code-barcode-scan",
	});
}

export default Component;
