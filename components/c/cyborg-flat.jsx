import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mo0jvlb2k.css';
import '../../css/z/zdil9-bok.css';
import '../../css/m/mhxwe-b9c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mo0jvlb2k"/><path class="zdil9-bok"/><path class="mhxwe-b9c"/></g>`,
		"fallback": "streamline-color:cyborg-flat",
	});
}

export default Component;
