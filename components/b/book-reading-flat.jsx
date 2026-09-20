import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mtayulche.css';
import '../../css/w/wrohq-pjh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mtayulche"/><path class="wrohq-pjh"/></g>`,
		"fallback": "streamline-color:book-reading-flat",
	});
}

export default Component;
