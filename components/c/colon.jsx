import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t_kpvabmz.css';
import '../../css/o/o10isi8cf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="t_kpvabmz"/><path class="o10isi8cf"/></g>`,
		"fallback": "iconaut:colon",
	});
}

export default Component;
