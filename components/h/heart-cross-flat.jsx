import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l-ulm0dwj.css';
import '../../css/x/xvkr-2b7u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="l-ulm0dwj"/><path class="xvkr-2b7u"/></g>`,
		"fallback": "streamline-flex-color:heart-cross-flat",
	});
}

export default Component;
