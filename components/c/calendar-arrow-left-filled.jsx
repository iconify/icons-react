import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvt7f_k7b.css';
import '../../css/t/t0khrkc2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvt7f_k7b"/><path class="t0khrkc2l"/>`,
		"fallback": "lucide-extended:calendar-arrow-left-filled",
	});
}

export default Component;
