import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/drbcunfzf.css';
import '../../css/j/jtd-bwbya.css';
import '../../css/o/o6cu-j0nm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="drbcunfzf"/><path class="jtd-bwbya"/><path class="o6cu-j0nm"/></g>`,
		"fallback": "lucide-extended:between-horizontal-end-duotone",
	});
}

export default Component;
