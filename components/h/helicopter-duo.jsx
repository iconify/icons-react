import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q91r-dbee.css';
import '../../css/n/nf7gtbc4r.css';
import '../../css/b/bt7scxyyw.css';
import '../../css/x/x0eemkkvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q91r-dbee"/><path class="nf7gtbc4r wm-a"/><path class="bt7scxyyw"/><path class="wm-a x0eemkkvj"/></g>`,
		"fallback": "withicons:helicopter-duo",
	});
}

export default Component;
