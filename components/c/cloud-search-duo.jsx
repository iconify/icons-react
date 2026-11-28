import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx3kk1qbx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/da92j5b5b.css';
import '../../css/e/ezq2-zv3v.css';
import '../../css/j/j_x_k9l_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary xx3kk1qbx"/><g class="dt0cm9dhy primary"><path class="da92j5b5b"/><path class="ezq2-zv3v"/><path class="j_x_k9l_s"/></g>`,
		"fallback": "iconaut:cloud-search-duo",
	});
}

export default Component;
