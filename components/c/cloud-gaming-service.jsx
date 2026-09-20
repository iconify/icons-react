import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i7a-sr8kb.css';
import '../../css/w/wkynrxbxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i7a-sr8kb"/><path class="wkynrxbxv"/></g>`,
		"fallback": "streamline-freehand:cloud-gaming-service",
	});
}

export default Component;
