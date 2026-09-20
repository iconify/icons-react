import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oua8-7eug.css';
import '../../css/f/flc8ylb0l.css';
import '../../css/t/tyc496bax.css';
import '../../css/f/fk0ee1kqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oua8-7eug"/><path class="flc8ylb0l"/><path class="tyc496bax"/><path class="fk0ee1kqq"/></g>`,
		"fallback": "solar:folder-kanban-bold-duotone",
	});
}

export default Component;
