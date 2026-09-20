import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jtt8mubfs.css';
import '../../css/y/ysujj_veo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jtt8mubfs"/><path class="ysujj_veo"/></g>`,
		"fallback": "streamline-color:dice-4-flat",
	});
}

export default Component;
