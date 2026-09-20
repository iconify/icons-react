import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yc9mjsbuz.css';
import '../../css/s/swvirvbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yc9mjsbuz"/><path class="swvirvbnr"/></g>`,
		"fallback": "streamline-sharp-color:hierarchy-16-flat",
	});
}

export default Component;
