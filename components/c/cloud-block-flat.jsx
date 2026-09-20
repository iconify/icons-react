import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kfdore-nb.css';
import '../../css/s/sx86rh3yx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kfdore-nb"/><path class="sx86rh3yx"/></g>`,
		"fallback": "streamline-color:cloud-block-flat",
	});
}

export default Component;
