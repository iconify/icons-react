import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ubyoeqa4p.css';
import '../../css/j/jf6nq-vdp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ubyoeqa4p"/><path class="jf6nq-vdp"/></g>`,
		"fallback": "streamline-color:fist-flat",
	});
}

export default Component;
