import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c55avbbis.css';
import '../../css/g/gmvd9bl8h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c55avbbis"/><path class="gmvd9bl8h"/></g>`,
		"fallback": "streamline-flex-color:brightness-4-flat",
	});
}

export default Component;
