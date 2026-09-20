import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ydhfu839t.css';
import '../../css/v/vilhoy67o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ydhfu839t"/><path class="vilhoy67o"/></g>`,
		"fallback": "streamline-sharp-color:hotel-three-star-flat",
	});
}

export default Component;
