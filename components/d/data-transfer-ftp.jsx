import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vv7_5hbnc.css';
import '../../css/n/nen8iqjiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vv7_5hbnc"/><path class="nen8iqjiv"/></g>`,
		"fallback": "streamline-freehand:data-transfer-ftp",
	});
}

export default Component;
