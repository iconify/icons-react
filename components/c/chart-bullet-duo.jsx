import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aki4_ob5y.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s49pa1y0q.css';
import '../../css/c/chcxsxgan.css';
import '../../css/a/aprrsssyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aki4_ob5y secondary"/><g class="dt0cm9dhy primary"><path class="s49pa1y0q"/><path class="chcxsxgan"/><path class="aprrsssyw"/></g>`,
		"fallback": "iconaut:chart-bullet-duo",
	});
}

export default Component;
