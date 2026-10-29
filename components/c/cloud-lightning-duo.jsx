import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p0uuuh_ua.css';
import '../../css/a/ahlmu3bhe.css';
import '../../css/y/yxa0nhn1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="p0uuuh_ua"/><path class="ahlmu3bhe wm-a"/><path class="yxa0nhn1t"/></g>`,
		"fallback": "withicons:cloud-lightning-duo",
	});
}

export default Component;
