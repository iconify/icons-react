import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rd0bcganj.css';
import '../../css/m/m5o785bkx.css';
import '../../css/l/liigi-hmf.css';
import '../../css/t/t66ofv8qu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rd0bcganj"/><path class="m5o785bkx"/><path class="liigi-hmf"/><path class="t66ofv8qu"/></g>`,
		"fallback": "iconaut:dice-d4",
	});
}

export default Component;
