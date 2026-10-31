import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9svjjhpo.css';
import '../../css/v/v1_dsqc1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9svjjhpo"/><path class="v1_dsqc1m"/>`,
		"fallback": "lucide-extended:calendar-arrow-right-filled",
	});
}

export default Component;
