import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aph6q2bxw.css';
import '../../css/z/zs5t2abgl.css';
import '../../css/c/cvpnadiui.css';
import '../../css/c/cogexj8lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aph6q2bxw"/><path class="zs5t2abgl"/><path class="cvpnadiui"/><path class="cogexj8lf"/></g>`,
		"fallback": "lets-icons:desk-alt-duotone-line",
	});
}

export default Component;
