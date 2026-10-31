import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b7ob32bbz.css';
import '../../css/v/volm66jxd.css';
import '../../css/q/q92ejbb-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b7ob32bbz wm-shadow"/><path class="volm66jxd"/><path class="q92ejbb-m"/></g>`,
		"fallback": "withicons-retro:alpana",
	});
}

export default Component;
