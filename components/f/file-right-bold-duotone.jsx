import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgd8bzbml.css';
import '../../css/n/niu3-lb_q.css';
import '../../css/x/x4f46-b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kgd8bzbml"/><path class="niu3-lb_q"/><path class="x4f46-b2l"/>`,
		"fallback": "solar:file-right-bold-duotone",
	});
}

export default Component;
