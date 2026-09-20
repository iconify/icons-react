import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dr8bhvbec.css';
import '../../css/s/s-w8dlbuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dr8bhvbec"/><path class="s-w8dlbuf"/></g>`,
		"fallback": "streamline-sharp-color:bullet-list-flat",
	});
}

export default Component;
