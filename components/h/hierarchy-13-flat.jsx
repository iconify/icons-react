import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zly-klsed.css';
import '../../css/d/dtjlkacye.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zly-klsed"/><path class="dtjlkacye"/></g>`,
		"fallback": "streamline-color:hierarchy-13-flat",
	});
}

export default Component;
