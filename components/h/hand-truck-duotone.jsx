import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ucouy03fj.css';
import '../../css/j/ju8w1nqow.css';
import '../../css/q/q2j1wumow.css';
import '../../css/i/i-50pgbxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ucouy03fj"/><path class="ju8w1nqow"/><path class="q2j1wumow"/><path class="i-50pgbxr"/></g>`,
		"fallback": "lucide-extended:hand-truck-duotone",
	});
}

export default Component;
