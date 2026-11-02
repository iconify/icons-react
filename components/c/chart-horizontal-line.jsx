import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smi8o-ccw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smi8o-ccw"/>`,
		"fallback": "mingcute:chart-horizontal-line",
	});
}

export default Component;
