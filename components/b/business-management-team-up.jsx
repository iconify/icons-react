import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oztnlvq4i.css';
import '../../css/x/x3xkrjwsf.css';
import '../../css/g/grpweky-m.css';
import '../../css/u/u55g-2b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oztnlvq4i"/><path class="x3xkrjwsf"/><path class="grpweky-m"/><path class="u55g-2b6s"/></g>`,
		"fallback": "streamline-freehand:business-management-team-up",
	});
}

export default Component;
