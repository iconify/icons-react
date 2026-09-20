import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vcbv1ob8w.css';
import '../../css/t/t6l11qe2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vcbv1ob8w"/><path class="t6l11qe2t"/></g>`,
		"fallback": "streamline-sharp-color:chat-bubble-disable-oval-flat",
	});
}

export default Component;
