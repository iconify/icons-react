import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q_w4odb-d.css';
import '../../css/s/sgz7esb3w.css';
import '../../css/a/ad1418b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q_w4odb-d"/><path class="sgz7esb3w"/><path class="ad1418b5h"/></g>`,
		"fallback": "streamline-freehand-color:bug-alert-message",
	});
}

export default Component;
