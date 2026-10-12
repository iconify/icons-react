import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qujl5dbry.css';
import '../../css/y/yynfaacui.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qujl5dbry"/><path class="yynfaacui"/>`,
		"fallback": "garden:emoji-happy-stroke-20",
	});
}

export default Component;
