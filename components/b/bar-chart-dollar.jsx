import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_r0tjbwq.css';
import '../../css/d/duhh5kbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_r0tjbwq"/><path clip-rule="evenodd" class="duhh5kbbr"/>`,
		"fallback": "lineicons:bar-chart-dollar",
	});
}

export default Component;
