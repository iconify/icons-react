import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k29vdte1d.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsGroupDiscussionMeetingx3Negative0)"><path clip-rule="evenodd" class="k29vdte1d"/></g><defs><clipPath id="healthiconsGroupDiscussionMeetingx3Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:group-discussion-meetingx3-negative",
	});
}

export default Component;
