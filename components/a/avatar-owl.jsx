import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rf4h7ccos.css';
import '../../css/b/bjy30yb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rf4h7ccos"/><path class="bjy30yb1k wm-a"/></g>`,
		"fallback": "withicons:avatar-owl",
	});
}

export default Component;
