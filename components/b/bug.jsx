import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a16cc9b_a.css';
import '../../css/l/l2bljsbmn.css';
import '../../css/x/x6gd_prso.css';
import '../../css/z/zh_p1cc6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a16cc9b_a"/><path class="l2bljsbmn wm-a"/><path class="x6gd_prso"/><path class="wm-a zh_p1cc6o"/></g>`,
		"fallback": "withicons:bug",
	});
}

export default Component;
