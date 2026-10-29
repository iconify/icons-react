import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w69n2x5jx.css';
import '../../css/i/i378c-rig.css';
import '../../css/k/k8okabcwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="w69n2x5jx"/><path class="i378c-rig wm-a"/><path class="k8okabcwj wm-s"/></g>`,
		"fallback": "withicons:calendar-search-solid",
	});
}

export default Component;
