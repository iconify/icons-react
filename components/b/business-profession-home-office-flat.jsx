import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/chc7iblgj.css';
import '../../css/e/eoiw8nbjh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="chc7iblgj"/><path class="eoiw8nbjh"/></g>`,
		"fallback": "streamline-color:business-profession-home-office-flat",
	});
}

export default Component;
