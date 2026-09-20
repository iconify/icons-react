import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g7spb0brj.css';
import '../../css/j/jq7p24m1s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g7spb0brj"/><path class="jq7p24m1s"/></g>`,
		"fallback": "streamline-color:hierarchy-7-flat",
	});
}

export default Component;
