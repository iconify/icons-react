import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/as8gjpbuf.css';
import '../../css/d/dlzvcu34t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="as8gjpbuf"/><path class="dlzvcu34t wm-a"/></g>`,
		"fallback": "withicons:chopsticks",
	});
}

export default Component;
