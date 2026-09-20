import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ejwjilf8g.css';
import '../../css/b/btyh9_bef.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ejwjilf8g"/><path class="btyh9_bef"/></g>`,
		"fallback": "streamline-flex-color:broken-link-1-flat",
	});
}

export default Component;
