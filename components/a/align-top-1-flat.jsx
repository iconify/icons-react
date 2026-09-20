import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ow44ur8-v.css';
import '../../css/o/on0__zbge.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ow44ur8-v"/><path class="on0__zbge"/></g>`,
		"fallback": "streamline-flex-color:align-top-1-flat",
	});
}

export default Component;
