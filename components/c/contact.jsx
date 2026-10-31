import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mx8mj1ars.css';
import '../../css/n/nnz57yw6o.css';
import '../../css/b/bu3vusbze.css';
import '../../css/a/anfu-u_2j.css';
import '../../css/q/qk63ce3jd.css';
import '../../css/c/cdw3f_mkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mx8mj1ars wm-shadow"/><path class="nnz57yw6o"/><path class="bu3vusbze"/><path class="anfu-u_2j"/><path class="qk63ce3jd"/><path class="cdw3f_mkt"/></g>`,
		"fallback": "withicons-retro:contact",
	});
}

export default Component;
