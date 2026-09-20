import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rah--nbqb.css';
import '../../css/i/i3yhlnl3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rah--nbqb"/><path class="i3yhlnl3m"/></g>`,
		"fallback": "streamline-freehand:connect-device-cancel",
	});
}

export default Component;
