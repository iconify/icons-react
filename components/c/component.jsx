import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bujohac1h.css';
import '../../css/a/a6rgdo_nj.css';
import '../../css/h/hx0ecabev.css';
import '../../css/q/qlmufcchk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bujohac1h"/><path class="a6rgdo_nj wm-a"/><path class="hx0ecabev"/><path class="qlmufcchk wm-a"/></g>`,
		"fallback": "withicons:component",
	});
}

export default Component;
