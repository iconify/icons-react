import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/brizay85j.css';
import '../../css/l/lk6j99brh.css';
import '../../css/e/e3o5kybty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="brizay85j"/><path class="lk6j99brh"/><path class="e3o5kybty"/></g>`,
		"fallback": "iconaut:fold-horizontal",
	});
}

export default Component;
