import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuwflsbst.css';
import '../../css/t/tlas7sg1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cuwflsbst"/><path class="tlas7sg1w"/></g>`,
		"fallback": "lucide-extended:arrow-big-up-duotone",
	});
}

export default Component;
