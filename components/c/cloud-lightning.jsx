import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yxa0nhn1t.css';
import '../../css/a/ahlmu3bhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yxa0nhn1t"/><path class="ahlmu3bhe wm-a"/></g>`,
		"fallback": "withicons:cloud-lightning",
	});
}

export default Component;
