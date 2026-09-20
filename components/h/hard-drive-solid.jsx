import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fkk8sit1q.css';
import '../../css/x/xv009jb3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fkk8sit1q"/><path class="xv009jb3f"/></g>`,
		"fallback": "mynaui:hard-drive-solid",
	});
}

export default Component;
