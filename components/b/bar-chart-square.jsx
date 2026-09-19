import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax_p4nbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax_p4nbzc"/>`,
		"fallback": "bxs:bar-chart-square",
	});
}

export default Component;
