import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc_sw6bwg.css';
import '../../css/r/ro-axhb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc_sw6bwg"/><path class="ro-axhb9f"/>`,
		"fallback": "bx:bxs-pie-chart-alt-2",
	});
}

export default Component;
