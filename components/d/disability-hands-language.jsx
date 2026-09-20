import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/alajr-bwy.css';
import '../../css/v/v45sn9bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="alajr-bwy"/><path class="v45sn9bve"/></g>`,
		"fallback": "streamline-freehand-color:disability-hands-language",
	});
}

export default Component;
