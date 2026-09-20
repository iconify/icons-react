import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/ldh9rpbvt.css';
import '../../css/w/wh5dknb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ldh9rpbvt"/><path class="wh5dknb-d"/></g>`,
		"fallback": "streamline-sharp-color:fire-alarm-1-flat",
	});
}

export default Component;
