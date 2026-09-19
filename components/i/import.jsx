import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roweh2vhe.css';
import '../../css/q/qq-quxyif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roweh2vhe"/><path class="qq-quxyif"/>`,
		"fallback": "bx:import",
	});
}

export default Component;
