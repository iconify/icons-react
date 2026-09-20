import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wdplivbfq.css';
import '../../css/m/mdkdr2bmp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wdplivbfq"/><path class="mdkdr2bmp"/></g>`,
		"fallback": "streamline-color:bug-antivirus-debugging-flat",
	});
}

export default Component;
