import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/ly5pc-12b.css';
import '../../css/l/ljsu8qbvu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ly5pc-12b"/><path class="ljsu8qbvu"/></g>`,
		"fallback": "streamline-color:hierarchy-14-flat",
	});
}

export default Component;
