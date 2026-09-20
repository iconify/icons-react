import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/ws5ialpkt.css';
import '../../css/r/rsvkr-3pv.css';
import '../../css/q/qil03rubo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ws5ialpkt"/><path class="rsvkr-3pv"/><path class="qil03rubo"/></g>`,
		"fallback": "streamline-freehand-color:email-action-reply-1",
	});
}

export default Component;
