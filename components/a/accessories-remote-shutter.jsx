import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ess-o-bzc.css';
import '../../css/i/i95p-zbal.css';
import '../../css/c/cdceoacpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ess-o-bzc"/><path class="i95p-zbal"/><path class="cdceoacpt"/></g>`,
		"fallback": "streamline-freehand:accessories-remote-shutter",
	});
}

export default Component;
