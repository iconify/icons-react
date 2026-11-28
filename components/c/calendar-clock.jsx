import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e5zqveb5m.css';
import '../../css/w/w7_mhrwuu.css';
import '../../css/k/k8gzt_h4u.css';
import '../../css/b/bhu664byo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e5zqveb5m"/><path class="w7_mhrwuu"/><path class="k8gzt_h4u"/><path class="bhu664byo"/></g>`,
		"fallback": "iconaut:calendar-clock",
	});
}

export default Component;
