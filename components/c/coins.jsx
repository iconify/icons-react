import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yqz_2re-h.css';
import '../../css/u/uo1xsbb6o.css';
import '../../css/x/xxbokhbhh.css';
import '../../css/n/ng9-c4b_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yqz_2re-h"/><path class="uo1xsbb6o"/><path class="wm-a xxbokhbhh"/><path class="ng9-c4b_d wm-a"/></g>`,
		"fallback": "withicons:coins",
	});
}

export default Component;
