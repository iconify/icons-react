import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yvjc3r64y.css';
import '../../css/d/dpxq9ov5b.css';
import '../../css/t/tgbgf7-4k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yvjc3r64y"/><path class="dpxq9ov5b"/><path class="tgbgf7-4k"/></g>`,
		"fallback": "streamline-color:cyborg-2-flat",
	});
}

export default Component;
