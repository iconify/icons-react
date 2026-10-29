import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b8gdax63a.css';
import '../../css/u/u11d_bcbf.css';
import '../../css/j/j3ihixg7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="b8gdax63a"/><path class="u11d_bcbf"/><path class="j3ihixg7r wm-a"/></g>`,
		"fallback": "withicons:images",
	});
}

export default Component;
