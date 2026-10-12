import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5rk34b7w.css';
import '../../css/y/yh4tz_b5v.css';
import '../../css/c/cfc90nvlc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u5rk34b7w"/><path class="yh4tz_b5v"/><path class="cfc90nvlc"/></g>`,
		"fallback": "lucide-extended:brick-wall-shield-duotone",
	});
}

export default Component;
