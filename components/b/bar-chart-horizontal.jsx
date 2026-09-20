import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg0_p6zxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg0_p6zxp"/>`,
		"fallback": "lucide:bar-chart-horizontal",
	});
}

export default Component;
