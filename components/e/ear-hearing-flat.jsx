import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xs627b8-i.css';
import '../../css/s/sydq1fbml.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xs627b8-i"/><path class="sydq1fbml"/></g>`,
		"fallback": "streamline-color:ear-hearing-flat",
	});
}

export default Component;
