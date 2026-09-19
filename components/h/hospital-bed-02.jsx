import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eci4qpbck.css';
import '../../css/s/s46lxcc4q.css';
import '../../css/t/tw7t0e8hs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="eci4qpbck"/><path class="s46lxcc4q"/><path class="tw7t0e8hs"/></g>`,
		"fallback": "hugeicons:hospital-bed-02",
	});
}

export default Component;
