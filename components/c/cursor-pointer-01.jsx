import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g0v5shbon.css';
import '../../css/b/bpuyxlb4i.css';
import '../../css/k/k2rgfbi6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g0v5shbon"/><path class="bpuyxlb4i"/><path class="k2rgfbi6d"/></g>`,
		"fallback": "hugeicons:cursor-pointer-01",
	});
}

export default Component;
