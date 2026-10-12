import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajwnpacwy.css';
import '../../css/s/ssh18kvpm.css';
import '../../css/q/q-5_z1t3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ajwnpacwy"/><path class="ssh18kvpm"/><path class="q-5_z1t3c"/></g>`,
		"fallback": "lucide-extended:book-up-duotone",
	});
}

export default Component;
