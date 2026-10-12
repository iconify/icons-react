import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teke80b1t.css';
import '../../css/s/srka-7bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teke80b1t"/><path class="srka-7bio"/>`,
		"fallback": "lucide-extended:calendar-heart-filled",
	});
}

export default Component;
