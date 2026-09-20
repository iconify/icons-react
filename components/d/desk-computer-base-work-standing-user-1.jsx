import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jduu6tbrz.css';
import '../../css/q/qle1tsbwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jduu6tbrz"/><path class="qle1tsbwa"/></g>`,
		"fallback": "streamline-freehand-color:desk-computer-base-work-standing-user-1",
	});
}

export default Component;
