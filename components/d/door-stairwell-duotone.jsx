import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdi8vsbpq.css';
import '../../css/y/yix2arbwd.css';
import '../../css/p/pukd_r9hx.css';
import '../../css/x/x3u1419yc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kdi8vsbpq"/><path class="yix2arbwd"/><path class="pukd_r9hx"/><path class="x3u1419yc"/></g>`,
		"fallback": "lucide-extended:door-stairwell-duotone",
	});
}

export default Component;
