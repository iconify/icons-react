import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zkn966bvz.css';
import '../../css/j/jt0jlob0g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zkn966bvz"/><path class="jt0jlob0g"/></g>`,
		"fallback": "streamline-color:file-add-alternate-flat",
	});
}

export default Component;
