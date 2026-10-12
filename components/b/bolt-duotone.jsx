import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u1coyrgub.css';
import '../../css/m/mb3gk9bpt.css';
import '../../css/i/ihx2hwbnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u1coyrgub"/><path class="mb3gk9bpt"/><path clip-rule="evenodd" class="ihx2hwbnx"/></g>`,
		"fallback": "lucide-extended:bolt-duotone",
	});
}

export default Component;
