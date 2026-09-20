import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nybvxzbyi.css';
import '../../css/l/l-zrlvb-z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nybvxzbyi"/><path class="l-zrlvb-z"/></g>`,
		"fallback": "streamline-flex-color:ai-scanner-robot-flat",
	});
}

export default Component;
