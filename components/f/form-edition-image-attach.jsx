import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oylc4jbtr.css';
import '../../css/w/w6yfmubqy.css';
import '../../css/q/qcf4fnbbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oylc4jbtr"/><path class="w6yfmubqy"/><path class="qcf4fnbbz"/></g>`,
		"fallback": "streamline-freehand:form-edition-image-attach",
	});
}

export default Component;
