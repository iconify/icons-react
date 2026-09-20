import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ac6m8ltwm.css';
import '../../css/r/rnfhcmbwj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ac6m8ltwm"/><path class="rnfhcmbwj"/></g>`,
		"fallback": "streamline-color:hand-grab-flat",
	});
}

export default Component;
