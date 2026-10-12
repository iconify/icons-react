import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq0-blbqi.css';
import '../../css/u/ulens-dua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wq0-blbqi"/><path class="ulens-dua"/></g>`,
		"fallback": "lucide-extended:alarm-smoke-duotone",
	});
}

export default Component;
