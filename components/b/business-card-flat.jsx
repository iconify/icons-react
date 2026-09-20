import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mo11zxbxh.css';
import '../../css/h/hh-t8kb8u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mo11zxbxh"/><path class="hh-t8kb8u"/></g>`,
		"fallback": "streamline-color:business-card-flat",
	});
}

export default Component;
