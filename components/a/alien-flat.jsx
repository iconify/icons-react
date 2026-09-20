import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eioy01byi.css';
import '../../css/z/z6x183evw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="eioy01byi"/><path class="z6x183evw"/></g>`,
		"fallback": "streamline-color:alien-flat",
	});
}

export default Component;
