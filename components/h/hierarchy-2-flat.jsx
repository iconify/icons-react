import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wzziqtbzo.css';
import '../../css/a/a6rlxdovl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wzziqtbzo"/><path class="a6rlxdovl"/></g>`,
		"fallback": "streamline-flex-color:hierarchy-2-flat",
	});
}

export default Component;
