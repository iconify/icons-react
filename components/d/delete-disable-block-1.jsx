import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c8hw673iw.css';
import '../../css/o/ou3vzg9-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c8hw673iw"/><path class="ou3vzg9-s"/></g>`,
		"fallback": "streamline-freehand-color:delete-disable-block-1",
	});
}

export default Component;
