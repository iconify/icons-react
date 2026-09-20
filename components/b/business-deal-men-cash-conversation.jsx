import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bdoolsb7c.css';
import '../../css/d/dx-h-3bpj.css';
import '../../css/z/z4zmz-s8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bdoolsb7c"/><path class="dx-h-3bpj"/><path class="z4zmz-s8q"/></g>`,
		"fallback": "streamline-freehand:business-deal-men-cash-conversation",
	});
}

export default Component;
