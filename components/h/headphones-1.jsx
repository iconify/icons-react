import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g39b-qb-o.css';
import '../../css/s/slzw9ibjc.css';
import '../../css/g/g5lysnbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g39b-qb-o"/><path class="slzw9ibjc"/><path class="g5lysnbks"/></g>`,
		"fallback": "streamline-freehand-color:headphones-1",
	});
}

export default Component;
