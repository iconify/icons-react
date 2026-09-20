import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lvfosvd_y.css';
import '../../css/l/li_jm9p_m.css';
import '../../css/j/jqh2ptbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lvfosvd_y"/><path class="li_jm9p_m"/><path class="jqh2ptbup"/></g>`,
		"fallback": "streamline-freehand:bug-alert-message",
	});
}

export default Component;
