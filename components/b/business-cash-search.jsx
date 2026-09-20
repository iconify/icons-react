import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w6_yylmyg.css';
import '../../css/l/lrj95gb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w6_yylmyg"/><path class="lrj95gb7l"/></g>`,
		"fallback": "streamline-freehand:business-cash-search",
	});
}

export default Component;
