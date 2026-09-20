import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x_l9libav.css';
import '../../css/e/esantgb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x_l9libav"/><path class="esantgb0u"/></g>`,
		"fallback": "streamline-freehand-color:disability-wheelchair-3",
	});
}

export default Component;
