import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-estebhx.css';
import '../../css/q/qok3lqb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t-estebhx"/><path class="qok3lqb-j"/></g>`,
		"fallback": "lucide-extended:fullscreen-duotone",
	});
}

export default Component;
