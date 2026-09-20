import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/babpmwbvf.css';
import '../../css/x/x451lac3m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="babpmwbvf"/><path class="x451lac3m"/></g>`,
		"fallback": "streamline-color:ambulance-flat",
	});
}

export default Component;
