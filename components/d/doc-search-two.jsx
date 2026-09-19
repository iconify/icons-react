import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vh43g_6pb.css';
import '../../css/x/xt4fmw64g.css';
import '../../css/x/xfru9th-s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vh43g_6pb"/><path class="xt4fmw64g"/><path class="xfru9th-s"/></g>`,
		"fallback": "icon-park-solid:doc-search-two",
	});
}

export default Component;
