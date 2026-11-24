import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w44drjixu.css';
import '../../css/o/own158bqy.css';
import '../../css/y/y91gvol1h.css';
import '../../css/k/kxd6uivzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w44drjixu"/><path class="own158bqy"/><path class="y91gvol1h"/><path class="kxd6uivzu"/></g>`,
		"fallback": "lucide-extended:atom-duotone",
	});
}

export default Component;
