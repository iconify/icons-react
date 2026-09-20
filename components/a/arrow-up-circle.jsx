import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ok917nzon.css';
import '../../css/v/v661fkboo.css';
import '../../css/s/s7gevvepe.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ok917nzon"/><path class="v661fkboo"/><path class="s7gevvepe"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:arrow-up-circle",
	});
}

export default Component;
