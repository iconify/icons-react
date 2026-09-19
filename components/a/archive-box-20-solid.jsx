import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q2v6sfbov.css';
import '../../css/o/or4uz6d-u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q2v6sfbov"/><path clip-rule="evenodd" class="or4uz6d-u"/></g>`,
		"fallback": "heroicons:archive-box-20-solid",
	});
}

export default Component;
