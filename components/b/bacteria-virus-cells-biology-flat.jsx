import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pwjy37mmq.css';
import '../../css/u/up__5xbxy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pwjy37mmq"/><path class="up__5xbxy"/></g>`,
		"fallback": "streamline-color:bacteria-virus-cells-biology-flat",
	});
}

export default Component;
