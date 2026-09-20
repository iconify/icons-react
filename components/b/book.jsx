import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvzdmtb_q.css';
import '../../css/q/q1gzscbeh.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvzdmtb_q"/><path class="q1gzscbeh"/>`,
		"fallback": "lineicons:book",
	});
}

export default Component;
