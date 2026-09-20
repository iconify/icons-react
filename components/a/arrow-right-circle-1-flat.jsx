import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p51ourb4l.css';
import '../../css/y/yscu6ybec.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p51ourb4l"/><path class="yscu6ybec"/></g>`,
		"fallback": "streamline-plump-color:arrow-right-circle-1-flat",
	});
}

export default Component;
