import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/alkyyoz5q.css';
import '../../css/u/up75blb-x.css';
import '../../css/q/qj1n_hbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="alkyyoz5q"/><path class="up75blb-x"/><path class="qj1n_hbiq"/></g>`,
		"fallback": "lucide-extended:hand-duotone",
	});
}

export default Component;
