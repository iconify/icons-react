import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubzqx4l4f.css';
import '../../css/d/dnxa5bcqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubzqx4l4f"/><path class="dnxa5bcqv"/>`,
		"fallback": "mingcute:chart-horizontal-2-line",
	});
}

export default Component;
