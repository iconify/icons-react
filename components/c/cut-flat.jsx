import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zjyemhb6n.css';
import '../../css/g/g7n4qbctj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zjyemhb6n"/><path class="g7n4qbctj"/></g>`,
		"fallback": "streamline-color:cut-flat",
	});
}

export default Component;
