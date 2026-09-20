import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsh_u4-0o.css';
import '../../css/q/qd2q1wwpm.css';
import '../../css/q/q6q31ps-d.css';
import '../../css/p/p084vk_ir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bsh_u4-0o"/><path class="qd2q1wwpm"/><path class="q6q31ps-d"/><path class="p084vk_ir"/></g>`,
		"fallback": "tdesign:fries",
	});
}

export default Component;
