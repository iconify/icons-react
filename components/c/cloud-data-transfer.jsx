import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mxfyprbln.css';
import '../../css/m/mdkh173sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mxfyprbln"/><path class="mdkh173sn"/></g>`,
		"fallback": "streamline-freehand:cloud-data-transfer",
	});
}

export default Component;
