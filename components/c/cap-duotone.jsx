import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ft4bv5pda.css';
import '../../css/m/mepxv4b3w.css';
import '../../css/o/os72iwz3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ft4bv5pda"/><path class="mepxv4b3w"/><path class="os72iwz3x"/></g>`,
		"fallback": "lucide-extended:cap-duotone",
	});
}

export default Component;
