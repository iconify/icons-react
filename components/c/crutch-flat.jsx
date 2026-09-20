import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/ru5j80ktc.css';
import '../../css/m/mh82bwbot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ru5j80ktc"/><path class="mh82bwbot"/></g>`,
		"fallback": "streamline-sharp-color:crutch-flat",
	});
}

export default Component;
