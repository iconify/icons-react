import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a3tzpbche.css';
import '../../css/h/h2zqtry4y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a3tzpbche"/><path class="h2zqtry4y"/></g>`,
		"fallback": "streamline-flex-color:inbox-tray-1-flat",
	});
}

export default Component;
