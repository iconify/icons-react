import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/be0kucc7b.css';
import '../../css/m/mmn0xubnp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="be0kucc7b"/><path class="mmn0xubnp"/></g>`,
		"fallback": "streamline-color:bug-virus-folder-flat",
	});
}

export default Component;
