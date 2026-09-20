import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i47n3dbmj.css';
import '../../css/c/ch9-t4b2f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i47n3dbmj"/><path class="ch9-t4b2f"/></g>`,
		"fallback": "streamline-flex-color:fragile-flat",
	});
}

export default Component;
