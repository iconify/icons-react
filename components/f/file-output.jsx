import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/la86h8b1w.css';
import '../../css/s/sd9l15b0w.css';
import '../../css/y/ycysw5bol.css';
import '../../css/r/r3xl7mgzd.css';
import '../../css/c/cjb5brbbe.css';
import '../../css/p/ppimmtnqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="la86h8b1w wm-shadow"/><path class="sd9l15b0w"/><path class="ycysw5bol"/><path class="r3xl7mgzd"/><path class="cjb5brbbe"/><path class="ppimmtnqd"/></g>`,
		"fallback": "withicons-retro:file-output",
	});
}

export default Component;
