import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vh43g_6pb.css';
import '../../css/k/kjjtm5q3v.css';
import '../../css/x/xfru9th-s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vh43g_6pb"/><path class="kjjtm5q3v"/><path class="xfru9th-s"/></g>`,
		"fallback": "icon-park-outline:doc-search-two",
	});
}

export default Component;
