import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9clmdbve.css';
import '../../css/s/sqjarqpey.css';
import '../../css/m/mvpyig48m.css';
import '../../css/y/yl32yprqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e9clmdbve"/><path class="sqjarqpey"/><rect class="mvpyig48m"/><path class="yl32yprqp"/></g>`,
		"fallback": "andrsrxn:door-box",
	});
}

export default Component;
