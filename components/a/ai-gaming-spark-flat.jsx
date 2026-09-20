import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/ln42hrgan.css';
import '../../css/c/c0bt-y7jo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ln42hrgan"/><path class="c0bt-y7jo"/></g>`,
		"fallback": "streamline-color:ai-gaming-spark-flat",
	});
}

export default Component;
