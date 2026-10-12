import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hyt0gbcxe.css';
import '../../css/f/flf5bgbgb.css';
import '../../css/q/qp_f2rhnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hyt0gbcxe"/><path class="flf5bgbgb"/><path class="qp_f2rhnt"/></g>`,
		"fallback": "lucide-extended:briefcase-duotone",
	});
}

export default Component;
