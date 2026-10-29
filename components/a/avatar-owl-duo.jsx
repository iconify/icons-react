import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e2ic50bir.css';
import '../../css/f/fzdvlkb6x.css';
import '../../css/j/jp-xkfbfa.css';
import '../../css/r/rf4h7ccos.css';
import '../../css/i/ikgwwnbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e2ic50bir"/><path class="fzdvlkb6x wm-a"/><path class="jp-xkfbfa wm-a"/><path class="rf4h7ccos"/><path class="ikgwwnbps wm-a"/></g>`,
		"fallback": "withicons:avatar-owl-duo",
	});
}

export default Component;
