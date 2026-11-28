import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/ztl_5qjda.css';
import '../../css/n/n41jx5b9q.css';
import '../../css/r/r-ge1zblt.css';
import '../../css/u/u2ma7tbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ztl_5qjda"/><path class="n41jx5b9q"/><path class="r-ge1zblt"/><path class="u2ma7tbxd"/></g>`,
		"fallback": "iconaut:alarm-snooze",
	});
}

export default Component;
