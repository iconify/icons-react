import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l6mbwsbyz.css';
import '../../css/p/pi-zqba0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="l6mbwsbyz"/><path class="pi-zqba0w"/></g>`,
		"fallback": "streamline-sharp-color:discount-percent-fire-flat",
	});
}

export default Component;
