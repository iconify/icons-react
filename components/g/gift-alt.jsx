import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/q/qoog56bkt.css';
import '../../css/r/rijeli0gx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><rect class="qoog56bkt"/><path class="rijeli0gx"/></g>`,
		"fallback": "lets-icons:gift-alt",
	});
}

export default Component;
