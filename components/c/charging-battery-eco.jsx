import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yq9d5bc0z.css';
import '../../css/p/p73v9_o9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yq9d5bc0z"/><path class="p73v9_o9w"/></g>`,
		"fallback": "streamline-freehand:charging-battery-eco",
	});
}

export default Component;
