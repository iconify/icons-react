import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-l_t8zlt.css';
import '../../css/e/e-_t4f13s.css';
import '../../css/t/tf373tbqk.css';
import '../../css/t/t5k-_f5ou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-l_t8zlt"/><path class="e-_t4f13s"/><path class="tf373tbqk"/><path clip-rule="evenodd" class="t5k-_f5ou"/>`,
		"fallback": "solar:chart-square-outline",
	});
}

export default Component;
