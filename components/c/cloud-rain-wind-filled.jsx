import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhblkjbdv.css';
import '../../css/s/stisajbpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhblkjbdv"/><path class="stisajbpq"/>`,
		"fallback": "lucide-extended:cloud-rain-wind-filled",
	});
}

export default Component;
