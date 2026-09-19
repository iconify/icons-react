import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mbv0z8b9w.css';
import '../../css/e/eilml7bjc.css';
import '../../css/r/ruftofbgy.css';
import '../../css/c/cc4a2vcxs.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mbv0z8b9w"/><path class="eilml7bjc"/><path class="ruftofbgy"/><path class="cc4a2vcxs"/></g>`,
		"fallback": "flagpack:gw",
	});
}

export default Component;
