import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o3t5nzbro.css';
import '../../css/p/patzoac9d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o3t5nzbro"/><path class="patzoac9d"/></g>`,
		"fallback": "streamline-flex-color:credit-card-approved-flat",
	});
}

export default Component;
