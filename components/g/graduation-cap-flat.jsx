import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rz7j_zb9j.css';
import '../../css/k/k6lxs-9zx.css';
import '../../css/u/uvpw34b8e.css';
import '../../css/a/aet6weaep.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rz7j_zb9j"/><path clip-rule="evenodd" class="k6lxs-9zx"/><path clip-rule="evenodd" class="uvpw34b8e"/><path clip-rule="evenodd" class="aet6weaep"/></g>`,
		"fallback": "streamline-color:graduation-cap-flat",
	});
}

export default Component;
