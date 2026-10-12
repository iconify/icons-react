import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/adwzh7blz.css';
import '../../css/o/oaeva_b0f.css';
import '../../css/t/t10a2509h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="adwzh7blz"/><path class="oaeva_b0f"/><path class="t10a2509h"/></g>`,
		"fallback": "lucide-extended:bug-duotone",
	});
}

export default Component;
