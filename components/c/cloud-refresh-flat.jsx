import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bu7aitcom.css';
import '../../css/j/jzifzqb9t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bu7aitcom"/><path class="jzifzqb9t"/></g>`,
		"fallback": "streamline-color:cloud-refresh-flat",
	});
}

export default Component;
