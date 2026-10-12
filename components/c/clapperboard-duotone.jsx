import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/utd9avbad.css';
import '../../css/i/i24ag8-po.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="utd9avbad"/><path class="i24ag8-po"/></g>`,
		"fallback": "lucide-extended:clapperboard-duotone",
	});
}

export default Component;
