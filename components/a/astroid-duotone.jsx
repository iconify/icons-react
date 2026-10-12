import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/auuvc8z4n.css';
import '../../css/m/mr4nq2bds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="auuvc8z4n"/><path class="mr4nq2bds"/></g>`,
		"fallback": "lucide-extended:astroid-duotone",
	});
}

export default Component;
