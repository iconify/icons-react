import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a9xk7ubfw.css';
import '../../css/q/qj3d9tsrk.css';
import '../../css/n/n47dh7b_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a9xk7ubfw"/><path class="qj3d9tsrk"/><path class="n47dh7b_l"/></g>`,
		"fallback": "tdesign:folder-shared",
	});
}

export default Component;
