import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z7ld48b8v.css';
import '../../css/t/tst6sfblt.css';
import '../../css/c/cofp1obby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z7ld48b8v"/><path class="tst6sfblt"/><path class="cofp1obby"/></g>`,
		"fallback": "lucide-extended:glasses-duotone",
	});
}

export default Component;
