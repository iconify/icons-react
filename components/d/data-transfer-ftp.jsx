import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j44mk4bjy.css';
import '../../css/q/qzf_p6ghl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j44mk4bjy"/><path class="qzf_p6ghl"/></g>`,
		"fallback": "streamline-freehand-color:data-transfer-ftp",
	});
}

export default Component;
