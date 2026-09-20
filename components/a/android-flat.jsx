import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xyy3e54uu.css';
import '../../css/s/s-sxnobdl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xyy3e54uu"/><path class="s-sxnobdl"/></g>`,
		"fallback": "streamline-color:android-flat",
	});
}

export default Component;
