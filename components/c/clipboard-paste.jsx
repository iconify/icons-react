import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p8nc0nbln.css';
import '../../css/k/kfirkk0hp.css';
import '../../css/c/cai__zb4b.css';
import '../../css/o/ofays0bxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="p8nc0nbln"/><path class="kfirkk0hp"/><path class="cai__zb4b"/><path class="ofays0bxy"/></g>`,
		"fallback": "iconaut:clipboard-paste",
	});
}

export default Component;
