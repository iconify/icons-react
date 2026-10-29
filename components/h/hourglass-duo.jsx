import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lfjr2qb3w.css';
import '../../css/p/p_kl59b1m.css';
import '../../css/j/j90xqmbyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lfjr2qb3w"/><path class="p_kl59b1m"/><path class="j90xqmbyp"/></g>`,
		"fallback": "withicons:hourglass-duo",
	});
}

export default Component;
