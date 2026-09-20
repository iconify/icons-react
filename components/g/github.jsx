import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pf0nk9bfs.css';
import '../../css/l/lke1m2vop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pf0nk9bfs"/><path class="lke1m2vop"/></g>`,
		"fallback": "mynaui:github",
	});
}

export default Component;
