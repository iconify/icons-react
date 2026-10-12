import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2hl1gbca.css';
import '../../css/n/nfvfrmv_u.css';
import '../../css/t/t2kj8u-pi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b2hl1gbca"/><path class="nfvfrmv_u"/><path class="t2kj8u-pi"/></g>`,
		"fallback": "lucide-extended:calendar-clock-duotone",
	});
}

export default Component;
