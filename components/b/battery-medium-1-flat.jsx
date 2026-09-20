import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m0psg9b7n.css';
import '../../css/w/wc1uaac-n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m0psg9b7n"/><path class="wc1uaac-n"/></g>`,
		"fallback": "streamline-color:battery-medium-1-flat",
	});
}

export default Component;
