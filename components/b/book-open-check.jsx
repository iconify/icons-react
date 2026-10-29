import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z_02kkxdd.css';
import '../../css/u/uh6a78blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z_02kkxdd"/><path class="uh6a78blk wm-a"/></g>`,
		"fallback": "withicons:book-open-check",
	});
}

export default Component;
