import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz55uh92z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qz55uh92z"/>`,
		"fallback": "healthicons:group-discussion-meetingx3-outline",
	});
}

export default Component;
