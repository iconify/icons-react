import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e5op-4hqc.css';
import '../../css/k/kyofrvb7e.css';
import '../../css/e/e_hvle-fh.css';
import '../../css/z/zbv0h6bgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e5op-4hqc"/><path class="kyofrvb7e wm-a"/><path class="e_hvle-fh wm-a"/><path class="zbv0h6bgp"/></g>`,
		"fallback": "withicons:folders-duo",
	});
}

export default Component;
