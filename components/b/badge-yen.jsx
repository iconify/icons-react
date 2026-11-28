import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l4--ovbba.css';
import '../../css/a/aajofwqkw.css';
import '../../css/t/t7a_hsb5n.css';
import '../../css/x/x9uiiibze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l4--ovbba"/><path class="aajofwqkw"/><path class="t7a_hsb5n"/><path class="x9uiiibze"/></g>`,
		"fallback": "iconaut:badge-yen",
	});
}

export default Component;
