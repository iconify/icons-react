import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/ruvr9-gig.css';
import '../../css/b/b4q8m4bus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ruvr9-gig"/><path class="b4q8m4bus"/></g>`,
		"fallback": "hugeicons:bubble-chat-spark",
	});
}

export default Component;
