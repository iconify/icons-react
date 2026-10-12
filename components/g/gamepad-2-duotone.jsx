import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bqrez2aeo.css';
import '../../css/h/h-3fc-ngb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bqrez2aeo"/><path class="h-3fc-ngb"/></g>`,
		"fallback": "lucide-extended:gamepad-2-duotone",
	});
}

export default Component;
