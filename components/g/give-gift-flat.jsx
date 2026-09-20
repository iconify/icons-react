import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d05t81_5v.css';
import '../../css/l/leaxh76dx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="d05t81_5v"/><path class="leaxh76dx"/></g>`,
		"fallback": "streamline-sharp-color:give-gift-flat",
	});
}

export default Component;
