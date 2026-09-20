import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dhu6t20or.css';
import '../../css/u/u-rzv3g9s.css';
import '../../css/k/ku4q1zblj.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/n/nnbvolc4c.css';
import '../../css/g/g74e2oluk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dhu6t20or"/><path class="u-rzv3g9s"/><path clip-rule="evenodd" class="ku4q1zblj"/><g class="mc2zb0bvp"><path class="nnbvolc4c"/><path class="g74e2oluk"/></g></g>`,
		"fallback": "solar:airbuds-left-bold-duotone",
	});
}

export default Component;
