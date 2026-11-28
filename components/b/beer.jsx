import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/psqiixwqa.css';
import '../../css/i/i5s4dnbbr.css';
import '../../css/s/snn11qb0s.css';
import '../../css/t/twdzmxv9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="psqiixwqa"/><path class="i5s4dnbbr"/><path class="snn11qb0s"/><path class="twdzmxv9o"/></g>`,
		"fallback": "iconaut:beer",
	});
}

export default Component;
