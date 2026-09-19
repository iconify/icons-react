import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g2a9hnbiv.css';
import '../../css/v/vtf5fma1r.css';
import '../../css/u/ulffmnbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g2a9hnbiv"/><path clip-rule="evenodd" class="vtf5fma1r"/><path clip-rule="evenodd" class="ulffmnbrq"/></g>`,
		"fallback": "healthicons:contraceptive-injection-outline-24px",
	});
}

export default Component;
