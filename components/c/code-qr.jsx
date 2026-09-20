import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dopwdpb0e.css';
import '../../css/n/n96uvlbur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dopwdpb0e"/><path class="n96uvlbur"/></g>`,
		"fallback": "streamline-freehand:code-qr",
	});
}

export default Component;
