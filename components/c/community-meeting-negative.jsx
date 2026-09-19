import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f_94i78iy.css';
import '../../css/n/nds2xhawn.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsCommunityMeetingNegative0)" class="cuyn6tgcc"><path class="f_94i78iy"/><path clip-rule="evenodd" class="nds2xhawn"/></g><defs><clipPath id="healthiconsCommunityMeetingNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:community-meeting-negative",
	});
}

export default Component;
