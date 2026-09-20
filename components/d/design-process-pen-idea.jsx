import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bxmypex3u.css';
import '../../css/p/ppg-atb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bxmypex3u"/><path class="ppg-atb2t"/></g>`,
		"fallback": "streamline-freehand-color:design-process-pen-idea",
	});
}

export default Component;
