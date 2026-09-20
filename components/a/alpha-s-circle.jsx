import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc9_4z-8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc9_4z-8q"/>`,
		"fallback": "mdi:alpha-s-circle",
	});
}

export default Component;
