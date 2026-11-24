import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk1iewbti.css';
import '../../css/q/ql1midcyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk1iewbti"/><path class="ql1midcyw"/>`,
		"fallback": "lucide-extended:globe-off-filled",
	});
}

export default Component;
